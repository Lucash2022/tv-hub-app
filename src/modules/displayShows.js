import { addCommentPopupEvent } from './displaypopup.js';
import showsCounter from './itemscounter.js';

class Shows {
  constructor() {
    this.API_URL = 'https://api.tvmaze.com/';
    this.like_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CvrqAzoVr9PCSxK9Vq6U/likes';
    this.shows = [];
    this.likes = [];
  }

  getShows = async (showName) => {
    const Query = `search/shows?q=${showName}`;
    const list = await fetch(`${this.API_URL}${Query}`).then((response) => response.json());
    this.shows = [...list];
  }

  getLikes = async () => {
    this.likes = await fetch(this.like_URL).then((response) => response.json());
  }

  displayShows = async () => {
    await this.getShows('the');
    await this.getLikes();

    const showsList = this.shows.reduce((prev, curr) => {
      if (curr.show.image) {
        const index = this.likes.findIndex((like) => like.item_id === curr.show.id);
        const msgLikes = index <= 0 ? 0 : this.likes[index].likes;

        prev += `
                 <div class="shows">
                 
                   <div class="show-image">
                    <img src=${curr.show.image.medium} />
                   </div>
                   <div class="show-name">
                     <span>${curr.show.name}</span>
                     <div class="like"> 
                     <i class="fa fa-heart fa-lg" data-pos=${curr.show.id} id="${curr.show.id}"></i>
                     <span>${msgLikes}</span> Likes 
                    </div>
                    
                   </div>
                   <div class="comments">
                     <button data-id="${curr.show.id}"  class="btn" id="${curr.show.id}">Comments</button>
                     <button class="btn-reservations" id="${curr.show.id}">Reservations</button>
                   </div>
             
               </div>
               `;
      }
      return prev;
    }, '');
    document.querySelector('.showslist').innerHTML = showsList;
    document.querySelector('.shows-ctr').innerHTML = showsCounter();
    addCommentPopupEvent();
    this.registerLikes();
  }

  addLike = async (itemId, likeButton) => {
    await fetch(this.like_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    }).then((response) => response.text(response)).then((json) => json);
    await this.getLikes();

    const index = this.likes.findIndex((like) => like.item_id === itemId);
    const msgLikes = index >= 0 ? this.likes[index].likes : 0;
    likeButton.nextElementSibling.innerHTML = msgLikes;
  }

  registerLikes = () => {
    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      const movieID = parseInt(btn.getAttribute('id'), 10);
      this.addLike(movieID, btn);
    }));
  };
}

export default Shows;