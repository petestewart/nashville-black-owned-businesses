import utils from '../helpers/utils';
import data from '../helpers/data/bizData';

const currentFilters = [];

const filterbyNeighborhood = () => {
  let filteredList = [];
  const list = data.getBusinesses().slice();
  for (let i = 0; i < currentFilters.length; i += 1) {
    const results = list.filter((shop) => shop.neighborhood.includes(currentFilters[i]));
    filteredList = filteredList.concat(results);
  }
  return filteredList;
};

const displayResults = (array) => {
  const list = array.slice();
  list.sort((a, b) => {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA.substring(0, 4) === 'THE ') {
      nameA = nameA.slice(4);
    }
    if (nameB.substring(0, 4) === 'THE ') {
      nameB = nameB.slice(4);
    }
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  let domString = '';
  for (let i = 0; i < list.length; i += 1) {
    const business = list[i];
    domString += `
    <div class = "biz">
      <div class = "name">${business.name}</div>
      <div class = "address">${business.address}</div>
      <div class = "zip">${business.zip}</div>
      <div class = "neighborhood">${business.neighborhood}</div>
      <div class = "link">`;
    if (business.yelp !== '') {
      domString += `
      <a href = "${business.yelp}" target="_blank">
      <img src="src/images/fi_yelp.png" alt="Yelp"></a>
      `;
    }
    if (business.doordash !== '') {
      domString += `
      <a href = "${business.doordash}" target="_blank">
      <img src="src/images/fi_doordash.png" alt="DoorDash"></a>
      `;
    }
    if (business.grubhub !== '') {
      domString += `
      <a href = "${business.grubhub}" target="_blank">
      <img src="src/images/fi_grubhub.png" alt="GrubHub"></a>
      `;
    }
    if (business.ubereats !== '') {
      domString += `
      <a href = "${business.ubereats}" target="_blank">
      <img src="src/images/fi_ubereats.png" alt="UberEats"></a>
      `;
    }
    domString += `
        </div>
    </div>
    `;
  }
  utils.printToDom('#results', domString);
};

const toggleBoxOn = (id) => {
  document.getElementById(id).classList.remove('fa-square');
  document.getElementById(id).classList.add('fa-check-square');
};

const toggleBoxOff = (id) => {
  document.getElementById(id).classList.remove('fa-check-square');
  document.getElementById(id).classList.add('fa-square');
};

const resetButtonsN = () => {
  currentFilters.length = 0;
  const allButtons = document.getElementsByClassName('filter-btn');
  Array.from(allButtons).forEach((filterButton) => {
    toggleBoxOff(filterButton.id);
    toggleBoxOn('filter-n-all');
  });
};

const displayAll = () => {
  resetButtonsN();
  const all = data.getBusinesses();
  displayResults(all);
};

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
          <li><i class="far fa-check-square filter-btn" id="filter-n-all"></i> All</li>`;
  for (let i = 0; i < neighborhoods.length; i += 1) {
    const buttonId = neighborhoods[i].replace(/ /g, '_');
    domString += `<li><i class="far fa-square filter-btn" id="filter-n-${buttonId}"></i> ${neighborhoods[i]}</li>`;
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

const getFilter = (e) => {
  const clicked = (e.target.id);
  const buttonId = clicked.replace('_', ' ');
  const clickedFilter = buttonId.slice(9);
  // const filterCat = buttonId.slice(7, 8); *** GETS CATEGORY
  if (clickedFilter === 'all') {
    displayAll();
    currentFilters.length = 0;
    return;
  }
  if (currentFilters.includes(clickedFilter)) {
    const a = currentFilters.indexOf(clickedFilter);
    currentFilters.splice(a, 1);
    toggleBoxOff(clicked);
  } else {
    currentFilters.push(clickedFilter);
    toggleBoxOn(clicked);
    toggleBoxOff('filter-n-all');
  }
  if (currentFilters.length === 0) {
    document.getElementById('filter-n-all').classList.remove('fa-square');
    document.getElementById('filter-n-all').classList.add('fa-check-square');
    displayAll();
  } else {
    const newResults = filterbyNeighborhood();
    displayResults(newResults);
  }
};

const addFilterEvents = () => {
  const allButtons = document.getElementsByClassName('filter-btn');
  Array.from(allButtons).forEach((filterButton) => {
    filterButton.addEventListener('click', getFilter);
  });
};

const createFilterButtons = () => {
  const filterButtons = servicesButtons() + neighboroodButtons();
  utils.printToDom('#filterButtons', filterButtons);
  addFilterEvents();
};

// onclick="filterSelection('all')

export default {
  displayResults, filterbyNeighborhood, toggleBtnState, createFilterButtons, displayAll,
};
