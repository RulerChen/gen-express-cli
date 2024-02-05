import dotenv from 'dotenv';
dotenv.config();

let config = {};
const mode = process.env.NODE_ENV || 'development';
if (mode === 'production') {
  console.log('Production mode');
  const result = dotenv.config({ path: './.env.production' });
  if (result.error) {
    throw result.error;
  } else {
    for (const key in result.parsed) {
      process.env[key] = result.parsed[key];
    }
  }
}

config = {
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3000,
  mode: mode,
  apiVersion: process.env.API_VERSION || '1.0',
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
};

console.log(process.env.APP_PORT);

export default config;
