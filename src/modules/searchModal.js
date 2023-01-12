import { getComment } from './commentApi.js';
import { modalDisplay } from './modal.js';

const getApiData = async (URL) => {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
};

const cardDetails = async (id, name) => {
  const show = await getApiData(
    `https://api.tvmaze.com/singlesearch/shows?q=${name}`,
  );
  const comments = await getComment(id);
  modalDisplay(show);
  const commentContainer = document.querySelector('.comment-container');
  const commentCounter = document.querySelector('.comment-counter');
  comments.forEach((comment) => {
    commentContainer.innerHTML += `
         <li class="comment-list">
          ${comment.creation_date} ${comment.username}: ${comment.comment}
        </li>`;
    commentCounter.innerHTML = parseInt((commentCounter.innerHTML), 10) + 1;
  });
};

export default cardDetails;