import { createElement as E } from './reakt.js';
import { renderElement } from './reakt-dom.js';
const App = E(
  'div',
  null,
  E('h1', null, 'Welcome to Hoops'),
  E('h2', null, 'Sub title')
);

const root = document.querySelector('#app');
root.appendChild(renderElement(App));

console.log(App);
