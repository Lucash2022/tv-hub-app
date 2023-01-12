import CARD_API from './apiUrl.js';
import { postLike, getLikesData } from './likeApi.js';
import { selectedCardDetails } from './modal.js';
import cardDetails from './searchModal.js';

const getApiData = async (URL) => {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
};

const showContainer = document.querySelector('.show-container');
const MovieCount = document.querySelectorAll('.movie-counter');
const form = document.querySelector('#search-form');

const renderLikes = async () => {
  const likesData = await getLikesData(CARD_API);
  const cards = document.querySelectorAll('.cards');
  cards.forEach((card) => {
    const cardIDs = card.getAttribute('id');
    likesData.forEach((data) => {
      const likesDataID = data.item_id;
      const { likes } = data;
      if (cardIDs === likesDataID) {
        const likeCount = card.childNodes[3].childNodes[3];
        likeCount.innerHTML = likes;
      }
    });
  });
};

const renderCommentPopup = () => {
  const commentButton = document.querySelectorAll('button.comment');

  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonID = button.parentNode.parentNode.getAttribute('id');
      selectedCardDetails(parseInt(buttonID, 10));
    });
  });
};

const renderSearchCommentPopup = () => {
  const commentButton = document.querySelectorAll('button.comment');

  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonID = button.parentNode.parentNode.getAttribute('id');
      const movie = button.parentNode.parentNode.childNodes[3].childNodes[0];
      const movieName = movie.nextSibling.childNodes[0].nextSibling.innerHTML;
      cardDetails(parseInt(buttonID, 10), movieName);
    });
  });
};

const renderCards = (shows, index) => {
  showContainer.innerHTML += ` 
  <li class="cards" id="${shows[index].id}">
    <div class="card-image">
    <a href="${shows[index].url}" target="blank">
      <img
      src="${shows[index].image.medium}"
      alt="${shows[index].name} image" />
    </a>
    </div>
    <ul class="card-body">
      <li class="likes-container">
      <p>${shows[index].name}</p>
      <p class="like-btn"><i class="fa fa-heart like-btn-icon"></i></p>
      </li>
      <p class="likes"></p> 
    </ul>
    <div class="btn-comment">
      <button class="comment" >Comments</button>
    </div>
  </li>
  `;
};

const DISPLAY = async () => {
  const shows = await getApiData(CARD_API);
  const showLength = 50;
  for (let i = showLength; i > 0; i -= 1) {
    const index = Math.floor(Math.random() * 50);
    renderCards(shows, index);
  }
  MovieCount.forEach((count) => {
    count.innerHTML = showLength;
  });
  renderLikes();
  renderCommentPopup();

  const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');
  likeBtnIcon.forEach((button) => {
    button.addEventListener('click', async () => {
      const parentDiv = button.parentNode.parentNode.parentNode.parentNode;
      const likeID = parentDiv.getAttribute('id');
      const likeCount = parentDiv.childNodes[3].childNodes[3];
      const likeCountValue = parseInt(likeCount.innerHTML, 10);
      if (likeCount.innerHTML === '') {
        likeCount.innerHTML = 1;
      } else {
        likeCount.innerHTML = likeCountValue + 1;
      }
      postLike({ item_id: likeID });
    });
  });
};

const renderUserSearch = () => {
  form.onsubmit = async (e) => {
    e.preventDefault();
    const { search } = e.target;
    const userSearch = search.value;
    if (userSearch.length !== 0) {
      showContainer.innerHTML = '';
      const shows = await getApiData(
        `https://api.tvmaze.com/search/shows?q=${userSearch}`,
      );
      const showLength = shows.length;
      for (let i = 0; i < showLength; i += 1) {
        const obj = shows[i].show.image;
        const imgURL = Object.values(obj)[0];
        showContainer.innerHTML += ` 
          <li class="cards" id="${shows[i].show.id}">
            <div class="card-image">
            <a href="${shows[i].show.url}" target="blank">
              <img
              src="${imgURL}"
              alt="${shows[i].show.name} image" />
            </a>
            </div>
            <ul class="card-body">
              <li class="likes-container">
              <p>${shows[i].show.name}</p>
              <p class="like-btn"><i class="fa fa-heart like-btn-icon"></i></p>
              </li>
              <p class="likes"></p> 
            </ul>
            <div class="btn-comment">
              <button class="comment" >Comments</button>
            </div>
          </li>
        `;
      }


      MovieCount.forEach((count) => {
        count.innerHTML = showLength;
      });

      renderLikes();
      renderSearchCommentPopup();

      const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');
      likeBtnIcon.forEach((button) => {
        button.addEventListener('click', async () => {
          const parentDiv = button.parentNode.parentNode.parentNode.parentNode;
          const likeID = parentDiv.getAttribute('id');
          const likeCount = parentDiv.childNodes[3].childNodes[3];
          const likeCountValue = parseInt(likeCount.innerHTML, 10);
          if (likeCount.innerHTML === '') {
            likeCount.innerHTML = 1;
          } else {
            likeCount.innerHTML = likeCountValue + 1;
          }
          postLike({ item_id: likeID });
        });
      });
    }
  };
};

export { DISPLAY, renderUserSearch };
