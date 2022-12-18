import React from 'react';
import ReactDOM from 'react-dom';
var hW1 = React.createElement("h1", null, "hello abdi");
var hW2 = React.createElement("h2", null, "hello abdi");

var div1 = Reac.createElement("div",null, hW1, hW2);

ReactDom.render(
  div1,
  document.getElementById('app')
)
