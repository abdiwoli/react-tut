import React from 'react';
import ReactDOM from 'react-dom';
var h1 = React.createElement('h1',null, 'abdiwoli')
var h2 = React.createElement('h1', null, 'abdiwoli')
var div1 = React.createElement('div', null, h1,h2);
ReactDOM.render(
  h1,
  document.getElementById('app')
)
