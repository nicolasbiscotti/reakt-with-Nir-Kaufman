import { createElement } from './reakt.js';
import ReaktDOM from './reakt-dom.js';

function Title({ label }) {
  return createElement('h1', null, label);
}

function Section({ label, text }) {
  const title = Title({ label });
  const paragraph = createElement('p', null, text);

  return createElement('div', null, title, paragraph);
}

const App = createElement(
  'div',
  null,
  createElement(Title, { label: 'Welcome to Hoops' }, null),
  createElement(Section, {
    label: 'A container',
    text: 'Just another component be rendered',
  })
);

ReaktDOM.render(App, document.querySelector('#app'));

console.log(App);
