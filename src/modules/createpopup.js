/* eslint-disable */
import { renderComment, generateComment } from "./rendercomment.js";
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
        <section class="videos">
        <a class = "yt-link" id="${details.id === 69 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/-WYdUaK54fU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 28276 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/ndl1W4ltcmg" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 38963 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/aOC8E8z_ifw" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 37781 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/BqqShroJH44" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 13 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/IgVyroQjZbE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 20263 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Ej24W8gcmXQ" target="_blank"> <i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 83 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_jgYEYERYFQ" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 15299 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/M1bhOaLV4FU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 19809 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/zfexbFwCBnE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 42827 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Z6pdYkqeT7A" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>  
        <a class = "yt-link" id="${details.id === 54887 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/QRy3eAKzYGc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> 
        <a class = "yt-link" id="${details.id === 171 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=cjJLEYMzpjc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> 
        <a class = "yt-link" id="${details.id === 171 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=cjJLEYMzpjc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> 
        <a class = "yt-link" id="${details.id === 4 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=2yrviapP5uY" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 81 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=KPLWWIOCOOQ" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 44751 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=SJPJPUpNvDw" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 435 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=70Y32si4yb8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 33352 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=x8UAUAuKNcU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 28152 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=PJpsRF-TJAE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 21845 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=fYlZDTru55g" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 44242 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=ZkftnbMA2Hs&list=PLd4nhnkLAsvybAabQKnEHww9-AZZTFk1s" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 80 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=X0lRjbrH-L8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 63084 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=o6dto51ZZEE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>     
        <a class = "yt-link" id="${details.id === 1 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=f_Y5YeYrqUk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>        
        <a class = "yt-link" id="${details.id === 32158 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=_h3NFrBsJAM" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 161 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=YQeUmSD1c3g" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 58846 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=mzUx1hyL-yk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 7001 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=0Qr47bhb29A" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 17137 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=XELKAaCerps" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 82 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=KPLWWIOCOOQ&t=13s" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 44778 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=DotnJ7tTA34" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        
        <a class = "yt-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=dVLiDETfx1c" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 1</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 2</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 3</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 4</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 5</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 6</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 7</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 8</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 9</a>
        <a class = "s-link" id="${details.id === 16579 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/the-handmaids-tale-20j8l/5-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5 Episode 10</a>
        
        <a class = "yt-link" id="${details.id === 116 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tYhFAOUt1Fs" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        
        <a class = "yt-link" id="${details.id === 118 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=MczMB8nU1sY" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 53266 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=4igm6CEgo-k" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "s-link" id="${details.id === 53266 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/bmf-0m7z5/2-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2 Episode 1</a>

        <a class = "yt-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=aaQSScwZPbA" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 1</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 2</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 3</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 4</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 5</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 6</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 7</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 8</a>
        <a class = "s-link" id="${details.id === 59344 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tulsa-king-9j9lq/1-9" target="_blank"><i class="fa-brands fa-youtube"></i> Episode 9</a>
        
        <a class = "yt-link jack_ryan" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=c3lQ53e2j6Q" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 1</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 2</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 3</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 4</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 5</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 6</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 7</a>
        <a class = "s-link" id="${details.id === 5079 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/tom-clancys-jack-ryan-j2kpy/3-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 8</a>
       
        <a class = "yt-link younng_sheldon" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=gCy_GJvTmG8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 1</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 2</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 3</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 4</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 5</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 6</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 7</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 8</a>
        <a class = "s-link" id="${details.id === 26020 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/young-sheldon-j20oy/6-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 6  Episode 9</a>

        <a class = "yt-link Gotham" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=VwOPA2upeCA" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 1</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 2</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 3</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 4</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 5</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 6</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 7</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 8</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 9</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 10</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 11</a>
        <a class = "s-link" id="${details.id === 11 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/gotham-ykzqz/5-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 5  Episode 12</a>

      <div class = "season">
      <a class = "yt-link younng_sheldon" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tPWDioSdsHc" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 1</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 2</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 3</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 4</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 5</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 6</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 7</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 8</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-9" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 9</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-10" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 10</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-11" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 11</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-12" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 12</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/1-13" target="_blank"><i class="fa-brands fa-youtube"></i> Season 1  Episode 13</a>
        </div>
        <div = "season">
        <a class = "yt-link mind your langugae" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tPWDioSdsHc" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 1</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 2</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 3</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 4</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 5</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 6</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 7</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/2-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 2  Episode 8</a>
        </div>
        <div = "season">
        <a class = "yt-link mind your langugae" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=tPWDioSdsHc" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-1" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3 Episode 1</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-2" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 2</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-3" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 3</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-4" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 4</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-5" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 5</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-6" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 6</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-7" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 7</a>
        <a class = "s-link" id="${details.id === 1601 ? 'showframe' : 'hideframe'}" href="https://web.bflix.to/series/mind-your-language-506m/3-8" target="_blank"><i class="fa-brands fa-youtube"></i> Season 3  Episode 8</a>
        </div>
        </section>
        <div><span class="titles">Genre: </span> ${details.genres}</div>
        <div><span class="titles">OfficialSite: </span> <a href="${details.officialSite}" target="_blank">OfficialSite</a></div>

        <div><span class="titles">ID: </span> ${details.id}</div>
        <div><span class="titles">IMDb Rating: </span> ${details.rating.average}</div>
    </div>
    
    <div class="comment-container">

    <p class="comments">Comments(<span class="comments-ctr"></span>)</p>
    <div class="con-comm">
    </div>
    <form class="form" action="">
    <input type="text" class="name" id="user" placeholder="Enter Your Name" required>
    <input id="comment" cols = 30 rows = 5 placeholder="Add your Comment" required></input>
    <button type="submit" class="submit-btn" id="${details.id}">Add Comment</button>
    </form>
  </div>
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
    if (!(name === '' || comment === '')) {
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
