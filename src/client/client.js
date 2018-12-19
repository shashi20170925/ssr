import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import {BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(
    <div>
<BrowserRouter>
<Routes />
</BrowserRouter>
</div>
,document.querySelector('#root'));