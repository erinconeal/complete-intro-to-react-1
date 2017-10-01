import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;
const MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Haven', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Doc Martin', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'The Following', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'Peru' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
