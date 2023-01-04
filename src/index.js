import './style.css';

const showDetails = async (id) => {
  const baseApi = 'https://api.tvmaze.com/shows/';
  const list = await fetch(`${baseApi}${id}`).then((response) => response.json());
  return list;
};

const createPopUpDetails = (details) => {
  const showModal = document.createElement('div');
  showModal.className = 'pop-up';
  showModal.innerHTML = `
  <div class="pop-head">
  <h2 class = "showheading">${details.name}</h2>
  <button type="button" class="cancel seeButtons" id="closeBtn">
           ×
         </button>
  </div>
  
  <div class="popup-top-section">
  <div class= 'modal-image'>
  <img src="${details.image.medium}"; alt="cover image" id="modal-cover"/>
  </div>
  <div class= "modal-head">
      <div class = "summary">${details.summary}</div>
      <div><span class="titles">Genre: </span> ${details.genres}</div>
      <div><span class="titles">OfficialSite: </span> <a href="${details.officialSite}" target="_blank">OfficialSite</a></div>
      <div><span class="titles">Type: </span> ${details.type}</div>
      <div><span class="titles">Rating: </span> ${details.rating.average}</div>
  </div>

<textarea id="story" name="story"
          rows="2" cols="77">
Comment...
</textarea>

  </div>
`;
  return showModal;
};

const displayPoUp = async (id) => {
  const popupModal = document.querySelector('.window-popup');
  popupModal.innerHTML = '';
  const movieDetail = await showDetails(id);
  popupModal.append(createPopUpDetails(movieDetail));
};

const addCommentPopupEvent = () => {
  const commentBtns = document.querySelectorAll('.btn');
  commentBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    displayPoUp(btn.id);
  }));
};

class Shows {
  constructor() {
    this.API_URL = 'https://api.tvmaze.com/';
    this.shows = [];
  }

      getShows = async (showName) => {
        const Query = `search/shows?q=${showName}`;
        const list = await fetch(`${this.API_URL}${Query}`).then((response) => response.json());
        this.shows = [...list];
      }

      displayShows = async () => {
        await this.getShows(6);

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
                   <i class="fa fa-heart fa-lg" data-pos=${curr.show.id}></i> 
                  </div>
                 </div>
                 <div class="comments">
                   <button data-id="${curr.show.id}"  class="btn" id="${curr.show.id}">Comments</button>
                   <button class="btn" id="${curr.show.id}">Reservations</button>
                 </div>
           
             </div>
             `;
          }
          return prev;
        }, '');

        document.querySelector('.showslist').innerHTML = showsList;
        addCommentPopupEvent();
      }
}

const series = new Shows();
series.displayShows();

const closeButton = document.getElementById('closeBtn');

closeButton.addEventListener("click", myFunction);
function myFunction() {
  console.log('Hellow world')
  alert("Hello! I am an alert box!!");
}
