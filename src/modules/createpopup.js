/* eslint-disable */
import { renderComment,generateComment } from "./rendercomment.js";
import commentsCounter from "./commentscounter.js";

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
        <div class = "summary"><p id="sumTxt">Summary:</p>   ${details.summary}</div>
        <div><span class="titles">Genre: </span> ${details.genres}</div>
        <div><span class="titles">OfficialSite: </span> <a href="${details.officialSite}" target="_blank">OfficialSite</a></div>
        <div><span class="titles">Youtube link: </span>
        <a id="${details.id === 69 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/-WYdUaK54fU" target="_blank">THE BLACKLIST Youtube link</a>
<a id="${details.id ===  28276 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/ndl1W4ltcmg" target="_blank">THE WITCHER Youtube link</a>
<a  id="${details.id === 38963 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/aOC8E8z_ifw" target="_blank">The MANDALORIAN Youtube link</a>
<a id="${details.id === 37781 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/BqqShroJH44" target="_blank">THE PERIPHERAL Youtube link</a>
<a id="${details.id === 13 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/IgVyroQjZbE" target="_blank">THE FLASH  Youtube link</a>
<a id="${details.id === 20263 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Ej24W8gcmXQ" target="_blank"> THE ORVILLE Youtube link</a>
<a id="${details.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank">THE ROOKIE  Youtube link</a>
<a id="${details.id === 83 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_jgYEYERYFQ" target="_blank">THE SIMPSONS  Youtube link</a>
<a id="${details.id === 15299 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/M1bhOaLV4FU" target="_blank">THE BOYS  Youtube link</a>
<a id="${details.id === 19809 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/zfexbFwCBnE" target="_blank">THE RESIDENT  Youtube link</a>
<a id="${details.id === 42827 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Z6pdYkqeT7A" target="_blank">THE SANDMAN Youtube link</a>
        
        </div>
        <div><span class="titles">Type: </span> ${details.type}</div>
        <div><span class="titles">Rating: </span> ${details.rating.average}</div>
    </div>
    
    <p class="comments">Comments(<span class="comments-ctr"></span>)</p>
    <div class="con-comm">
    </div>
    <p class="atc">Add To Comment</p>
    <form class="form" action="">
    <input type="text" class="name" id="user" placeholder="Enter Your Name" required>
    <textarea id="comment" cols = 30 rows = 5 placeholder="Add your Comment" required></textarea>
    <button type="submit" class="submit-btn" id="${details.id}">Add Comment</button>
    </form>
  
    </div>
  `;
  return showModal;
};

export const addComment = async () => {
  const counter = commentsCounter();
  const commentForm = document.querySelector('.form');
  const formSubmitBtn = document.querySelector('.submit-btn');
  const commentSection = document.querySelector('.con-comm');
  document.querySelector('.comments-ctr').innerHTML = counter;
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = commentForm.elements[0];
    const comment = commentForm.elements[1];
    if(!(name==='' || comment === '') ){
      await renderComment(formSubmitBtn.id, name.value, comment.value);
      const commentslist = await generateComment(formSubmitBtn.id);
      commentSection.innerHTML = '';
      commentSection.append(commentslist);
      const counter = commentsCounter();
      document.querySelector('.comments-ctr').innerHTML = counter;
      commentForm.reset();
    }
 
  });
};
