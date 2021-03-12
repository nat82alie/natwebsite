import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // https://medium.com/@andreasheissenberger/react-components-render-twice-any-way-to-fix-this-91cf23961625#:~:text=The%20reason%20why%20this%20happens,problem%20by%20trying%20different%20implementations.
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
