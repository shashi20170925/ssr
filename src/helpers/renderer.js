import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import Routes from '../client/Routes';
//import Home from '../client/components/Home';


export default(req, store)=>{
    const content = renderToString( 
        <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
        <Routes/>
      </StaticRouter>
      </Provider>
   );
    return (`<html>
        <head>
            </head>
<body>
<div id="root"> 
    ${content}
    <script src="bundle.js"></script>
</div>
    </body>
        </html>
     `);
};