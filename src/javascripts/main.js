import '../styles/main.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free';
import app from './components/app';
import header from './components/header';
import filters from './components/filters';

const init = () => {
  app.displayAll();
  header.createHeader();
  filters.createFilterButtons();
  // window.onscroll = () => { header.makeStick(); };
  // header.makeStick();
};

init();
