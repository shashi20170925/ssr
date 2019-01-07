
// Lambda Handler
export async function handler(event, context) {
      try {
    //    const bundledJsForBrowserPath = `https://s3.amazonaws.com/${DeployConfig.AWS_S3_BUCKET}/${DeployConfig.AWS_S3_FOLDER_PREFIX}/${version}/bundleBrowser.js`;
      //  const response = await serverSideRender(requestPath, bundledJsForBrowserPath); // NOTE: Should change this address
  
       // console.log(response);
        context.succeed({
          statusCode: 200,
          headers: {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
          },
          body: "Response",
        });
      } catch (e) {
        console.error(e);
        console.error(e.meesage);
      }
    }
  
  