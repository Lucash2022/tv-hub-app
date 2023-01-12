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
    <h2 class="modal-title">${movie.name}( id:${movie.id})</h2>
    
    <p class="modal-description">${movie.summary}</p>
  </div>
  <section class="videos">
  <a class = "yt-link" id="${movie.id === 69 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/-WYdUaK54fU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 28276 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/ndl1W4ltcmg" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 38963 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/aOC8E8z_ifw" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 37781 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/BqqShroJH44" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 13 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/IgVyroQjZbE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 20263 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Ej24W8gcmXQ" target="_blank"> <i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  

  <a class = "yt-link" id="${movie.id === 83 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_jgYEYERYFQ" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 15299 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/M1bhOaLV4FU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 19809 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/zfexbFwCBnE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 42827 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Z6pdYkqeT7A" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>  
  <a class = "yt-link" id="${movie.id === 54887 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/QRy3eAKzYGc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br> 
  <a class = "yt-link" id="${movie.id === 171 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=cjJLEYMzpjc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br> 
  <a class = "yt-link" id="${movie.id === 171 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=cjJLEYMzpjc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br> 
  <a class = "yt-link" id="${movie.id === 4 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=2yrviapP5uY" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 81 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=KPLWWIOCOOQ" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 44751 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=SJPJPUpNvDw" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 435 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=70Y32si4yb8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 33352 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=x8UAUAuKNcU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 28152 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=PJpsRF-TJAE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 21845 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=fYlZDTru55g" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 44242 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=ZkftnbMA2Hs&list=PLd4nhnkLAsvybAabQKnEHww9-AZZTFk1s" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 80 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=X0lRjbrH-L8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 63084 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=o6dto51ZZEE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>     
  <a class = "yt-link" id="${movie.id === 1 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=f_Y5YeYrqUk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>        
  <a class = "yt-link" id="${movie.id === 32158 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=_h3NFrBsJAM" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 161 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=YQeUmSD1c3g" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 58846 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=mzUx1hyL-yk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 7001 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=0Qr47bhb29A" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 17137 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=XELKAaCerps" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 82 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=KPLWWIOCOOQ&t=13s" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "yt-link" id="${movie.id === 44778 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=DotnJ7tTA34" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  
  <a class = "yt-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=dVLiDETfx1c" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 9</a> <br>
  <a class = "s-link" id="${movie.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5 Episode 10</a> <br>
  
  <a class = "yt-link" id="${movie.id === 116 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tYhFAOUt1Fs" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  
  <a class = "yt-link" id="${movie.id === 118 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=MczMB8nU1sY" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <div class = "season" id="${movie.id === 53266 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link BMF" id="${movie.id === 53266 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=4igm6CEgo-k" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "s-link" id="${movie.id === 53266 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/bmf-0m7z5/2-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2 Episode 1</a> <br>
  </div>
  <div class = "season" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=aaQSScwZPbA" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9</a> <br>
  </div>

  <div class = "season" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link jack_ryan" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=c3lQ53e2j6Q" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 8</a> <br>
  </div>

  <div class = "season" id="${movie.id === 59344 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link jack_ryan" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=c3lQ53e2j6Q" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2 Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/2-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 8</a> <br>
  </div>
  <div class = "season" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link jack_ryan" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=c3lQ53e2j6Q" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 8</a> <br>
  </div>
  <div class = "season" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link younng_sheldon" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=gCy_GJvTmG8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 9</a> <br>
  </div>
  <div class = "season" id="${movie.id === 11 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link Gotham" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=VwOPA2upeCA" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 9</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 10</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 11</a> <br>
  <a class = "s-link" id="${movie.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 12</a> <br>
  </div>
  <div class = "season" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link younng_sheldon" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tPWDioSdsHc" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 9</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 10</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 11</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 12</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-13" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 13</a> <br>
  </div>
  <div class="season" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link mind_your_language" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tPWDioSdsHc" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 8</a> <br>
  </div>
  <div class="season" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link mind your langugae" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tPWDioSdsHc" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 8</a> <br>
  </div>

  <div class="season" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link FBI_most_wanted" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=Ru1ys_Ribf0" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1 Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 9</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 10</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 11</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 12</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-13" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 13</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/1-14" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1 Episode 14</a> <br>
  </div>
  <div class="season" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link FBI_most_wanted" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=Ru1ys_Ribf0" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2 Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 9</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 10</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 11</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 12</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-13" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 13</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-14" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2 Episode 14</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/2-15" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2 Episode 15</a> <br>
  
  </div>

  <div class="season" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link FBI_most_wanted" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=Ru1ys_Ribf0" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 9</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 10</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 11</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 12</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-13" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 13</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-14" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 14</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-15" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 15</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-16" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 16</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-17" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 17</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-18" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 18</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-19" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 19</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-20" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 20</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-21" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 21</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/3-22" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 22</a> <br>
  </div>

  <div class="season" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}">
  <a class = "yt-link FBI_most_wanted" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=j6J20njTGJM" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4 Episode 1</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 2</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 3</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 4</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 5</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 6</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 7</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 8</a> <br>
  <a class = "s-link" id="${movie.id === 40695 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/fbi-most-wanted-lx296/4-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4  Episode 9</a> <br>
</div>

<div class="season" id="${movie.id === 46562 ? 'showframe' : 'hideframe'}">
 <a class = "yt-link The_Last_OF-_US" id="${movie.id === 46562 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=uLtkt8BonwM" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1</a> <br>
 <a class = "s-link" id="${movie.id === 46562 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=uLtkt8BonwM" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1 Episode 1 available only from 15 January 2023</a> <br>

</div>

<div class="season" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}">
 <a class = "yt-link The_Rookie" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 1</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 2</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 3</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 4</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-10" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 10</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-11" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 11</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-12" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 12</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-13" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 13</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-14" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 14</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-15" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 15</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-16" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 16</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-17" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 17</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-18" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 18</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-19" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 19</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/1-20" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 20</a> <br>
</div>

<div class="season" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}">
 <a class = "yt-link The_Rookie" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-1" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 1</a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-2" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 2 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-3" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 3 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-4" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 4 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-10" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 10 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-11" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 11 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-12" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 12 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-13" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 13 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-14" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 14 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-15" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 15 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-16" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 16 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-17" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 17 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-18" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 18 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-19" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 19 </a> <br>
 <a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/2-20" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 20 </a> <br>              
</div>

<div class="season" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}">
<a class = "yt-link The_Rookie" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3</a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-1" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 1</a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-2" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 2 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-3" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 3 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-4" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 4 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-10" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 10 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-11" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 11 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-12" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 12 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-13" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 13 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/3-14" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 14 </a> <br>          
</div>

<div class="season" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}">
<a class = "yt-link The_Rookie" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Season 4</a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-1" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 1</a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-2" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 2 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-3" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 3 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-4" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 4 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-10" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 10 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-11" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 11 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-12" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 12 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-13" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 13 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-14" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 14 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-15" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 15 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-16" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 16 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-17" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 17 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-18" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 18 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-19" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 19 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/4-20" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 20 </a> <br> 
      
</div>

<div class="season" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}">
<a class = "yt-link The_Rookie" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5</a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-1" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 1</a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-2" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 2 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-3" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 3 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-4" target="_blank"><i class="fa-brands fa-youtube"></i>Episode 4 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9 </a> <br>
<a class = "s-link" id="${movie.id === 32938 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-rookie-70o6y/5-10" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 10 </a> <br>
    
</div>
</section>
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