import biz from '../helpers/data/bizData';
import utils from '../helpers/utils';

const filterbyNeighborhood = () => {
  let filteredList = [];
  const filters = ['East Nashville', 'Antioch', 'Germantown'];
  const list = biz.getBusinesses().slice();
  for (let i = 0; i < filters.length; i += 1) {
    const results = list.filter((shop) => shop.neighborhood.includes(filters[i]));
    // filteredList.push(results);
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
      <div class = "link"><a href = "${business.url}" target="_blank">link</a></div>
    </div>
    `;
  }
  utils.printToDom('#results', domString);
};

export default { displayResults, filterbyNeighborhood };
