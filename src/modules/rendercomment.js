const commUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CvrqAzoVr9PCSxK9Vq6U/comments';

export const renderComment = async (id, name, comment) => {
  const response = await fetch(`${commUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username: name, comment }),
  });
  return response;
};

const fetchComment = async (id) => {
  const reponseComment = await fetch(`${commUrl}?item_id=${id}`);
  const itemData = await reponseComment.json();
  return itemData;
};

/* eslint-disable */
const createComments = ({ comment, username, creation_date }) => {
  const commentli = document.createElement('li');
  commentli.className = 'comment-li';
  commentli.innerHTML = `
   <span>${creation_date}: </span><span>${username}: </span><span>${comment}</span>
  `;
  return commentli;
};
/* eslint-enable */
export const generateComment = async (id) => {
  const commentUl = document.createElement('ul');
  commentUl.id = 'comments-section';
  commentUl.innerHTML = '';
  const comments = await fetchComment(id);

  comments.forEach((comment) => {
    commentUl.append(createComments(comment));
  });

  return commentUl;
};