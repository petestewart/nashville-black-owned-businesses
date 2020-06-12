const printToDom = (selector, text) => {
  document.querySelector(selector).innerHTML = text;
};

const sortList = (array, key) => {
  array.sort((a, b) => (a[key]) - (b[key]));
};


const toggleBoxOn = (id) => {
  document.getElementById(id).classList.remove('fa-square');
  document.getElementById(id).classList.add('fa-check-square');
};

const toggleBoxOff = (id) => {
  document.getElementById(id).classList.remove('fa-check-square');
  document.getElementById(id).classList.add('fa-square');
};

export default {
  printToDom, sortList, toggleBoxOn, toggleBoxOff,
};
