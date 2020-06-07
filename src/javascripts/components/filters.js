import data from '../helpers/data/bizData';
import utils from '../helpers/utils';

// const alterClass = () => {
//   const current = document.getElementsByClassName('active');
//   current[0].className = current[0].className.replace(' active', '');
//   this.className += ' active';
// };

const toggleBtnState = () => {
  // const btnContainer = document.getElementById('myBtnContainer');
  // const btns = btnContainer.getElementsByClassName('btn');
  // for (let i = 0; i < btns.length; i += 1) {
  //   btns[i].addEventListener('click', alterClass());
  // }
};

const neighboroodButtons = () => {
  const shops = data.getBusinesses();
  const neighborhoodsRaw = [];
  for (let i = 0; i < shops.length; i += 1) {
    neighborhoodsRaw.push(shops[i].neighborhood);
  }
  const neighborhoods = [...new Set(neighborhoodsRaw)];
  neighborhoods.sort();
  let domString = `
  <div class='filter-group'>
      <span class="category-title">Neighborhoods</span>
        <ul>
          <li><i class="far fa-check-square" id="filter-n-all"></i> All</li>`;
  for (let i = 0; i < neighborhoods.length; i += 1) {
    const buttonId = neighborhoods[i].replace(/ /g, '').toLowerCase();
    domString += `<li><i class="far fa-square" id="filter-n-${buttonId}"></i> ${neighborhoods[i]}</li>`;
  }
  domString += '</ul></div>';
  return domString;
};

// const foodButtons = () => {
//   // need to add food type to objects
// };

const servicesButtons = () => {
  const domString = (`
  <div class='filter-group'>
    <span class="category-title">Services</span>
      <ul>
        <li><i class="far fa-check-square"></i> Delivery</li>
        <li><i class="far fa-check-square"></i> Take-Out</li>
      </ul>
    </div>
  `);
  return domString;
};

const createFilterButtons = () => {
  console.error('filters.createFilterButtons();');
  const filterButtons = servicesButtons() + neighboroodButtons();
  utils.printToDom('#filterButtons', filterButtons);
};

// onclick="filterSelection('all')

export default { toggleBtnState, createFilterButtons };
