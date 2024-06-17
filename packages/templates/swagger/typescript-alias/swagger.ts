import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Gen Express CLI',
    description: 'Gen Express CLI API Documentation',
  },
  host: 'localhost:8000/api',
};

const outputFile = './apidoc.json';
const routes = ['./src/routes/index.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// eslint-disable-next-line @typescript-eslint/no-floating-promises
swaggerAutogen()(outputFile, routes, doc);
