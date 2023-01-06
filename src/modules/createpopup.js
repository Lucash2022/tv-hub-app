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
    await renderComment(formSubmitBtn.id, name.value, comment.value);
    const commentslist = await generateComment(formSubmitBtn.id);
    commentSection.innerHTML = '';
    commentSection.append(commentslist);
    const counter = commentsCounter();
    document.querySelector('.comments-ctr').innerHTML = counter;
    commentForm.reset();
  });
};
