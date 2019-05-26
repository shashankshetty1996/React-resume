import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.addEventListener('click', () =>
  document.querySelector('.App').classList.toggle('A4')
);

ReactDOM.render(<App />, document.getElementById('root'));
