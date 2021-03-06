import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './assets/css/styles.css';
import {configureBaseRoute} from '@metamatic.net/metamatic-router';


configureBaseRoute('/router');

ReactDOM.render(
    <App/>,
	document.getElementById('root')
);
