const printToDom = (selector, text) => {
  document.querySelector(selector).innerHTML = text;
};

const sortList = (array, key) => {
  array.sort((a, b) => (a[key]) - (b[key]));
};

export default { printToDom, sortList };
