import { Sequelize } from 'sequelize';

import config from './config.js';

const sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, {
  host: config.database.host,
  port: config.database.port,
  dialect: config.database.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

export default sequelize;
