import CARD_API from './apiUrl.js';
import { postComment, getComment } from './commentApi.js';

const modal = document.querySelector('#modal');
const body = document.querySelector('body');

const getApiData = async (URL) => {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
};

const modalDisplay = (movie) => {
  modal.innerHTML = '';
  modal.innerHTML += `
    <div class="close-modal-btn">
    <button class="close-modal">X</button>
  </div>
  <div class="modal-image">
    <img src="${movie.image.medium}" alt="${movie.name} image">
  </div>
  <div class="modal-body">
    <h2 class="modal-title">${movie.name}</h2>
    <p class="modal-description">${movie.summary}</p>
  </div>
  <div id="comment-section">
    <h4 class="comment-title">Comments (<span class="comment-counter">0</span>)</h4>
    <ul class="comment-container"></ul>
    <form id="form" action="">
      <h4>Add a comment</h4>
      <input type="text" required placeholder="Your name" id="name" name="name">
      <textarea name="textarea" id="textarea"  required placeholder="Your insights"></textarea>
      <div class="btn-comment btn-submit">
        <button type="submit" class="comment" >Comment</button>
      </div>
    </form>
  </div>
  `;
  modal.classList.remove('hidden');
  body.classList.add('overflow');

  const closeModalBtn = document.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    body.classList.remove('overflow');
  });

  const form = document.querySelector('#form');
  const commentContainer = document.querySelector('.comment-container');
  const commentCounter = document.querySelector('.comment-counter');
  form.onsubmit = (e) => {
    e.preventDefault();

    const { name, textarea } = e.target;
    const date = new Date();
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();
    const currentDate = `${year}-${month}-${day}`;
    const username = `${currentDate} ${name.value}:`;

    commentContainer.innerHTML += `
     <li class="comment-list">
      ${username} ${textarea.value}
     </li>`;
    commentCounter.innerHTML = parseInt((commentCounter.innerHTML), 10) + 1;

    postComment({
      item_id: movie.id,
      username: name.value,
      comment: textarea.value,
    });

    form.reset();
  };
};

const selectedCardDetails = async (id) => {
  const shows = await getApiData(CARD_API);
  const comments = await getComment(id);
  shows.forEach((show) => {
    if (show.id === id) {
      modalDisplay(show);
      const commentContainer = document.querySelector('.comment-container');
      const commentCounter = document.querySelector('.comment-counter');
      comments.forEach((comment) => {
        commentContainer.innerHTML += `
         <li class="comment-list">
          ${comment.creation_date} ${comment.username} ${comment.comment}
        </li>`;
        commentCounter.innerHTML = parseInt((commentCounter.innerHTML), 10) + 1;
      });
    }
  });
};

export { selectedCardDetails, modalDisplay };