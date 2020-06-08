import '../styles/main.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free';
import app from './components/app';
import header from './components/header';

const init = () => {
  // const all = data.getBusinesses();
  // app.displayResults(all);
  header.createHeader();
  app.createFilterButtons();
  app.displayAll();
  // window.onscroll = () => { header.makeStick(); };
  // header.makeStick();
};

init();
