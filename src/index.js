import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './assets/css/styles.css';
import {configureBaseRoute} from './router/metamaticRouter';

configureBaseRoute('/router');

ReactDOM.render(
    <App/>,
	document.getElementById('root')
);
