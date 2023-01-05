import { createPopUpDetails } from './createpopup.js';

const showDetails = async (id) => {
  const baseApi = 'https://api.tvmaze.com/shows/';
  const list = await fetch(`${baseApi}${id}`).then((response) => response.json());
  return list;
};
const addClosePopUpevent = () => {
  const closeBtn = document.querySelector('.cancel');
  closeBtn.addEventListener('click', () => {
    const popupModal = document.querySelector('.window-popup');
    popupModal.style.display = 'none';
  });
};
const displayPoUp = async (id) => {
  const popupModal = document.querySelector('.window-popup');
  popupModal.innerHTML = '';
  const movieDetail = await showDetails(id);
  popupModal.append(createPopUpDetails(movieDetail));
  popupModal.style.display = 'flex';
  addClosePopUpevent();
};

/* eslint-disable */
export const addCommentPopupEvent = () => {
  const commentBtns = document.querySelectorAll('.btn');
  commentBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    displayPoUp(btn.id);
  }));
};
/* eslint-enable */
