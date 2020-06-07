import '../styles/main.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free';
import app from './components/app';
import header from './components/header';
import filters from './components/filters';
import data from './helpers/data/bizData';

const init = () => {
  const all = data.getBusinesses();
  // const east = app.filterbyNeighborhood();
  // console.error(east);
  app.displayResults(all);
  header.createHeader();
  filters.createFilterButtons();
  // window.onscroll = () => { header.makeStick(); };
  // header.makeStick();
};

init();
