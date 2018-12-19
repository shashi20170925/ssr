import express from 'express';
import renderer from './helpers/renderer';

//import React from 'react';
//import {renderToString} from 'react-dom/server';
//import Home from './client/components/Home';

//const express = require('express');
//const React = require('react');
//const RenderToString = require('react-dom/server').renderToString;
//const Home = require('./client/components/Home').default;

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {

    console.log(" listening on port 3000");

});