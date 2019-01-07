// const bundle = require("./bundle");

// module.exports.ssr = bundle.ssr.handler;


exports.appHandler = async (event) => {
  // const operation = event.queryStringParameters ? event.queryStringParameters.operation : null;
  // let data = JSON.parse(event.body);
  
       return sendRes(200, 'pong');
    
   
};

const sendRes = (status, body) => {
 var response = {
   statusCode: status,
   headers: {
     "Content-Type": "text/html"
   },
   body: body
 };
 return response;
}