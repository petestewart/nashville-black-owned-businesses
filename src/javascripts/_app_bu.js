import utils from '../helpers/utils';
import data from '../helpers/data/bizData';

const currentFilters = { neighborhood: [], type: [], veg: false };

const checkSingleFilter = (shop, filter) => {
  if (currentFilters[filter].length > 0) {
    return (shop[filter].includes(currentFilters[filter]));
  } return true;
};

const checkSingleSwitch = (shop, condition) => {
  if (currentFilters[condition] === true) {
    return (shop[condition] === true);
  } return true;
};
const applyCurrentFilters = () => {
  const shops = data.getBusinesses();
  const result = shops.filter((shop) => (checkSingleFilter(shop, 'neighborhood') && checkSingleFilter(shop, 'type') && checkSingleSwitch(shop, 'veg')));
  return result;
};

const getFilteredResults = () => {
  let filteredList = [];
  const list = data.getBusinesses().slice();
  if (currentFilters.neighborhood.length > 0) {
    currentFilters.neighborhood.forEach((nFilter) => {
      const results = list.filter((shop) => shop.neighborhood.includes(nFilter));
      filteredList = filteredList.concat(results);
    });
  }
  // newcode:
  if (currentFilters.type.length > 0) {
    currentFilters.type.forEach((fFilter) => {
      const results = filteredList.filter((shop) => shop.type.includes(fFilter));
      // filteredList = filteredList.concat(results);
      filteredList = results;
    });
  }

  // end newcode
  return filteredList;
};

const displayResults = (array) => {
  const list = array.slice();
  list.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
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
    return 0;
  });
  let domString = '';
  list.forEach((business) => {
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
  });
  utils.printToDom('#results', domString);
};

const resetButtonsN = () => {
  currentFilters.neighborhood.length = 0;
  const allButtons = document.getElementsByClassName('filter-btn');
  Array.from(allButtons).forEach((filterButton) => {
    utils.toggleBoxOff(filterButton.id);
    utils.toggleBoxOn('filter-n-all');
  });
};

const displayAll = () => {
  resetButtonsN();
  const all = data.getBusinesses();
  displayResults(all);
};

const neighboroodButtons = () => {
  const shops = data.getBusinesses();
  const neighborhoodsRaw = [];
  shops.forEach((shop) => {
    neighborhoodsRaw.push(shop.neighborhood);
  });
  const neighborhoods = [...new Set(neighborhoodsRaw)];
  neighborhoods.sort();
  let domString = `
  <div class='filter-group'>
    <span class="category-title">Neighborhoods</span>
    <ul>
      <li><i class="far fa-check-square filter-btn" id="filter-n-all"></i> All</li>`;
  neighborhoods.forEach((neighborhood) => {
    const buttonId = neighborhood.replace(/ /g, '_');
    domString += `<li><i class="far fa-square filter-btn" id="filter-n-${buttonId}"></i> ${neighborhood}</li>`;
  });
  domString += '</ul></div>';
  return domString;
};

const foodTypeButtons = () => {
  const shops = data.getBusinesses();
  const typesRaw = [];
  shops.forEach((shop) => {
    shop.type.forEach((type) => {
      typesRaw.push(type);
    });
  });
  const types = [...new Set(typesRaw)];
  types.sort();
  let domString = `
  <div class='filter-group'>
    <span class="category-title">Category</span>
    <ul>
      <li><i class="far fa-check-square filter-btn" id="filter-f-all"></i> All</li>`;
  types.forEach((type) => {
    const buttonId = type.replace(/ /g, '_');
    domString += `<li><i class="far fa-square filter-btn" id="filter-f-${buttonId}"></i> ${type}</li>`;
  });
  domString += '</ul></div>';
  return domString;
};

const showonlyButtons = () => {
  const domString = `
  <div class='filter-group'>
    <span class="category-title">Show Only:</span>
    <ul>
      <li><i class="far fa-check-square filter-btn" id="filter-veg"></i> Vegan-Friendly</li>
    </ul>
  </div>`;
  return domString;
};

// #2 called after click
const addClickedFilter = (clickedFilter, clickedId, c) => {
  // set category name:
  let category = '';
  if (c === 'n') {
    category = 'neighborhood';
  } else if (c === 'f') {
    category = 'type';
  } else if (c === 'v') {
    category = 'veg';
  }
  // if the all button was clicked, empty that portion of currentFilters:
  if (clickedFilter === 'all') {
    currentFilters[category].length = 0;
    utils.toggleBoxOn(`filter-${c}-all`);
    // displayAll(); ** TODO: change this to checkbox toggling function
    // return; ** probably kill this line
  }
  // if clicked filter already exists, remove it:
  if (currentFilters[category].includes(clickedFilter)) {
    const a = currentFilters[category].indexOf(clickedFilter);
    currentFilters[category].splice(a, 1);
    utils.toggleBoxOff(clickedId);
    // otherwise, add it:
  } else {
    currentFilters[category].push(clickedFilter);
    utils.toggleBoxOn(clickedId);
    utils.toggleBoxOff(`filter-${c}-all`);
  }

  // // if that was the last active filter in cat, toggle all button
  if (currentFilters[category].length === 0) {
    utils.toggleBoxOn(`filter-${c}-all`);
    displayAll(); // will need to change
  } else {
  // run the filters and display results:
    // const newResults = getFilteredResults(); ** OLD WAY
    // displayResults(newResults); ** ALOD WAY
  }
  const results = applyCurrentFilters();
  console.error('currentFilters: ', currentFilters);
  console.error('results: ', results);
  displayResults(results);
};

// #1 called after click
const getFilter = (e) => {
  const clickedId = (e.target.id);
  const buttonId = clickedId.replace('_', ' ');
  const clickedFilter = buttonId.slice(9);
  const filterCat = buttonId.slice(7, 8);
  addClickedFilter(clickedFilter, clickedId, filterCat);
};

const addFilterEvents = () => {
  const allButtons = document.getElementsByClassName('filter-btn');
  Array.from(allButtons).forEach((filterButton) => {
    filterButton.addEventListener('click', getFilter);
  });
};

const createFilterButtons = () => {
  const filterButtons = neighboroodButtons() + foodTypeButtons() + showonlyButtons();
  utils.printToDom('#filterButtons', filterButtons);
  addFilterEvents();
};

export default {
  displayResults, getFilteredResults, createFilterButtons, displayAll,
};
