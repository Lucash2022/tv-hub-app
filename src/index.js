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
  <button type="button" class="cancel seeButtons">
           ×
         </button>
  </div>
  
  <div class="popup-top-section">
  <div class= 'modal-image'>
  <img src="${details.image.medium}"; alt="cover image" id="modal-cover"/>
  <iframe width="600" height="295" id="${details.id === 69 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/-WYdUaK54fU" title="Blacklist Season 1 - Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 28276 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/ndl1W4ltcmg" title="THE WITCHER | MAIN TRAILER | NETFLIX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295"  id="${details.id === 38963 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/aOC8E8z_ifw" title="The Mandalorian | Official Trailer | Disney+ | Streaming Nov. 12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 37781 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/BqqShroJH44" title="THE PERIPHERAL Official Trailer (2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 13 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/IgVyroQjZbE" title="The Flash - Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 20263 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/Ej24W8gcmXQ" title="The Orville | official trailer (2017)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 32938 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/_HgC1TN8FVk" title="THE ROOKIE Official Trailer (HD) Nathan Fillion ABC Series" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 83 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/_jgYEYERYFQ" title="32 Seasons | The Simpsons | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 15299 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/M1bhOaLV4FU" title="The Boys - Official Trailer | Prime Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="295" id="${details.id === 19809 ? 'showframe' : 'hideframe'}" src="https://www.youtube.com/embed/zfexbFwCBnE" title="THE RESIDENT Season 1 Trailer (2018) Medical TV Show HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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