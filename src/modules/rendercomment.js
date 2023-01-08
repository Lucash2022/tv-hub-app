const apiKey = 'CvrqAzoVr9PCSxK9Vq6U';
const end = '/comments';
const commUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

export const renderComment = async (id, name, comment) => {
  const response = await fetch(`${commUrl}${apiKey}${end}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username: name, comment }),
  });
  return response;
};

const fetchComment = async (id) => {
  const reponseComment = await fetch(`${commUrl}${apiKey}${end}?item_id=${id}`);
  const itemData = await reponseComment.json();

  if (!reponseComment.ok) {
    return null;
  }
  return itemData;
};

/* eslint-disable */
const createComments = ({ comment, username, creation_date }) => {
  const cDate = creation_date;
  /* eslint-enable */
  const commentli = document.createElement('li');
  commentli.className = 'comment-li';
  commentli.innerHTML = `
   <span>${cDate}: </span><span>${username}: </span><span>${comment}</span>
  `;
  return commentli;
};

export const generateComment = async (id) => {
  const commentUl = document.createElement('ul');
  commentUl.id = 'comments-section';
  commentUl.innerHTML = '';
  const comments = await fetchComment(id);

  if (comments === null) {
    const noCommentLi = document.createElement('p');
    noCommentLi.className = 'no_comment_li';
    noCommentLi.textContent = 'Be the first to comment';
    commentUl.append(noCommentLi);
  } else {
    comments.forEach((comment) => {
      commentUl.append(createComments(comment));
    });
  }
  return commentUl;
};