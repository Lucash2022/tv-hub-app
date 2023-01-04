import { addCommentPopupEvent } from './displaypopup.js';

class Shows {
  constructor() {
    this.API_URL = 'https://api.tvmaze.com/';
    this.like_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CvrqAzoVr9PCSxK9Vq6U/likes';
    this.shows = [];
  }

  getShows = async (showName) => {
    const Query = `search/shows?q=${showName}`;
    const list = await fetch(`${this.API_URL}${Query}`).then((response) => response.json());
    this.shows = [...list];
  }

  displayShows = async () => {
    await this.getShows('the');
    const showsList = this.shows.reduce((prev, curr) => {
      if (curr.show.image) {
        prev += `
                 <div class="shows">
                 
                   <div class="show-image">
                    <img src=${curr.show.image.medium} />
                   </div>
                   <div class="show-name">
                     <span>${curr.show.name}</span>
                     <div class="like"> 
                     <i class="fa fa-heart fa-lg" data-pos=${curr.show.id} id="${curr.show.id}"></i> 
                    </div>
                    <p >Likes: <span id= p${curr.show.id}></span></p>
                   </div>
                   <div class="comments">
                     <button data-id="${curr.show.id}"  class="btn" id=${curr.show.id}>Comments</button>
                     <button class="btn-reservations" id="${curr.show.id}">Reservations</button>
                   </div>
             
               </div>
               `;
      }
      return prev;
    }, '');
    document.querySelector('.showslist').innerHTML = showsList;
    addCommentPopupEvent();
    this.registerLikes();
  }

  addLike = async (itemId) => {
    await fetch(this.like_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    }).then((response) => response.text(response)).then((json) => json);
  }

  registerLikes = () => {
    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      const movieID = btn.getAttribute('id');
      const pID = 'p'+movieID;
      document.getElementById(pID).innerHTML = 1;
      this.addLike(movieID);
    }));
  };
}

export default Shows;
