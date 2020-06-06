import '../styles/main.scss';
import 'bootstrap';
import app from './components/app';
import header from './components/header';

const init = () => {
  app.displayAll();
  header.makeStick();
};

init();
