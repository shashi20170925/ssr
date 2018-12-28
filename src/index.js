import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';

import proxy from 'express-http-proxy';
//import React from 'react';
//import {renderToString} from 'react-dom/server';
//import Home from './client/components/Home';

//const express = require('express');
//const React = require('react');
//const RenderToString = require('react-dom/server').renderToString;
//const Home = require('./client/components/Home').default;

const app = express();
app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
  );
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);
const promises = matchRoutes(Routes, req.path).map(({
    route
}) => {
    return route.loadData ?
        route.loadData(store) :
        null;
}).map((promise) => {
    if (promise) {
        return new Promise(
            (resolve, reject) => {
                promise.then(resolve).catch(resolve);
            }
        );

    }
   
})

    const render=() => {
        const context={};
        const content=renderer(req,store,context);
        if(context.notFound){
            res.status(404);
        }
        res.send(content);
   
};
    Promise.all(promises).then(render).catch(render)});

app.listen(3000, () => {

    console.log(" listening on port 3000");

});