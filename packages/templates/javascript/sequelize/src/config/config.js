import dotenv from 'dotenv';
dotenv.config();

let config = {};
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './env/production.env' });
}

config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  mode: process.env.NODE_ENV || 'development',
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

export default config;
