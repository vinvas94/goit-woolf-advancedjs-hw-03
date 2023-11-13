import { fetchBreeds, fetchCatByBreeds } from './cat-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SlimSelect from 'slim-select';
// import 'slim-select/styles';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  list: document.querySelector('.cat-info'),
  error: document.querySelector('.error'),
};

function populateBreedOptions(data) {
  return data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function loadBreeds() {
  refs.loader.classList.remove('hide');
  refs.error.classList.add('hide');
  fetchBreeds()
    .then(({ data }) => {
      const breedOptions = populateBreedOptions(data);
      refs.select.innerHTML = breedOptions;
      // refs.select.innerHTML = populateBreedOptions(data);
      // new SlimSelect({
      //   select: refs.select,
      // });
    })
    .catch(error => {
      iziToast.show({
        title: 'Hey',
        message: 'Oops! Something went wrong! Try reloading the page!',
        position: 'topRight',
        progressBarColor: 'red',
      });
    })
    .finally(() => {
      refs.loader.classList.add('hide');
      refs.select.classList.remove('hide');
    });
}
loadBreeds();

refs.select.addEventListener('change', onChangeOption);

function onChangeOption(event) {
  refs.loader.classList.remove('hide');
  fetchCatByBreeds(event.target.value)
    .then(({ data }) => {
      refs.list.innerHTML = '';
      refs.loader.classList.remove('hide');
      let { name, description, temperament, origin } = data[0].breeds[0];
      let { url } = data[0];
      refs.list.innerHTML = catMarkup({
        name,
        description,
        temperament,
        url,
        origin,
      });
    })
    .catch(error => {
      refs.list.innerHTML = '';
      iziToast.show({
        title: 'Hey',
        message: 'FAILED FETCH API!',
        position: 'topRight',
        progressBarColor: 'red',
      });
    })
    .finally(() => {
      refs.loader.classList.add('hide');
    });
}

function catMarkup({ id, name, description, temperament, url, origin }) {
  return `<div class="cat-container"><img class="cat-picture" src="${url}" alt="${id}"></div >
       <div class="cat-box">
    <h2 class="cat-name"> ${name}</h2>
    <p>${description}</p>
    <p><span> <b>Temperament:</b> </span> ${temperament}</p>
    <p><b>Origin:</b> ${origin}</p> </div >`;
}
