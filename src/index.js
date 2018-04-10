import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
