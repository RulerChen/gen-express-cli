import server from './server.js';

import config from './config/config.js';

const { host, port, mode, apiVersion } = config;

server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}/api/${apiVersion} in ${mode} mode`);
  console.log(`API version: ${apiVersion}`);
});
