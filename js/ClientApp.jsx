import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;
<<<<<<< HEAD
const MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
=======

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
>>>>>>> 60556fd702c3d19ac0f95aaf908f049103d1cdcb
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
<<<<<<< HEAD
    ce(MyTitle, { title: 'Haven', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Doc Martin', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'The Following', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'Peru' })
=======
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'House of Cards', color: 'peru' })
>>>>>>> 60556fd702c3d19ac0f95aaf908f049103d1cdcb
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
