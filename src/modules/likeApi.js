const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1qXMsA9cV2Pv46sO3dUb/likes';

export const getLikesData = async () => {
  const res = await fetch(API_URL);
  const result = await res.json();
  return result;
};

export const postLike = async (userInput) => fetch(API_URL, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(userInput),
})
  .then((response) => response.json())
  .then((data) => data.result);