/* eslint-disable */
export const createPopUpDetails = (details) => {
  /* eslint-enable */

  const showModal = document.createElement('div');
  showModal.className = 'pop-up';
  showModal.innerHTML = `
    <div class="pop-head">
    <h2 class = "showheading">${details.name}</h2>
    <button type="button" class="cancel">
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