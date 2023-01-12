const container = document.querySelector('.container__share-button-1');
const list = document.querySelector('.share-button-1__list');
const itemsList = document.querySelectorAll('.share-button-1__list > li');

export default function toggleList() {
  toggleClass();
  setListWidth();
}

const toggleClass = function () {
  return container.classList.toggle('active');
};

const setListWidth = function () {
  let listWidth = 0;
  itemsList.forEach(item => (listWidth += item.offsetWidth));
  list.style.setProperty('--listWidth', `${listWidth / 10}rem`);
};
