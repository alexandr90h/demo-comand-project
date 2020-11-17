import './styles.scss';
import filmListTempl from './templates/main-list-films.hbs';
const debounce = require('lodash.debounce');
import {
  fetchTopWeekMovie,
  fetchMovieByKeyWord,
  fetchMovieFullInfo,
} from './js/apiService'; 

const refs = {
  inputSeachElem: document.querySelector('.input-film'),
  listBoxElem:document.querySelector('.list-film-conteiner'),
};

refs.inputSeachElem.addEventListener('input', debounce(onSeach,500));
function onSeach() {
  refs.listBoxElem.innerHTML = '';
  const keyWord = refs.inputSeachElem.value;
  fetchMovieByKeyWord(keyWord).then(obj => {
    refs.listBoxElem.insertAdjacentHTML('beforeend', filmListTempl(obj.results));
    console.log(obj);
  });
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3f80d4cf4eb52d6e9d2ef400ea3d2acb&language=en-US').then(r=>r.json()).then(obj=>console.log(obj))
}
// console.log(fetchMovieByKeyWord('dad'));