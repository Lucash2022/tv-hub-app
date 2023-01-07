import Shows from './modules/displayShows.js';
import './style.css';

const userData = {
  search: 'the',
};
const searchInput = document.getElementById('searchInput');
localStorage.setItem('object', JSON.stringify(userData));
const dataOBJ = JSON.parse(localStorage.getItem('object'));

const series = new Shows();
series.displayShows(dataOBJ.search);
searchInput.addEventListener('change', () => {
  series.displayShows(searchInput.value);
});
