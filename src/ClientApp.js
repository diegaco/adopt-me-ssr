import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// other stuff that happens in browser

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
