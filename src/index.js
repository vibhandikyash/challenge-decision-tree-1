const app = require('./config/express');
const { port, env } = require('./config/vars');

// listen to requests
const server = app.listen(port, () => console.log(`server started on port ${port} (${env})`));
server.timeout = 10000000000;
/**
* Exports express
* @public
*/
module.exports = app;