import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
//import Home from '../client/components/Home';


export default(req)=>{
    const content:any = renderToString( 
        <StaticRouter location={req.path} context={{}}>
        <div><Routes/></div>
      </StaticRouter>
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