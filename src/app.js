import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import Button from './components/Button';

const ENTRY_NODE = document.getElementById('app');

ReactDOM.render(
  <Button color="red">
    <h1>This is Sparta</h1>
  </Button>,
  ENTRY_NODE,
);
