const header = document.getElementById('myHeader');

const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
const makeStick = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// When the user scrolls the page, execute makeStick
window.onscroll = () => { makeStick(); };

export default { makeStick };
