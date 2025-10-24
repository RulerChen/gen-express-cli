import winston from 'winston';
import morgan, { TokenIndexer } from 'morgan';

import { ENV } from '#src/config/env.js';

const { combine, timestamp, json, colorize, printf } = winston.format;

const developmentFormat = combine(
  colorize(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length ? JSON.stringify(meta) : '';
    return `[${timestamp}] ${level}: ${message} ${metaString}`;
  }),
);

const productionFormat = combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), json());

const logger = winston.createLogger({
  level: ENV.LOG_LEVEL,
  format: ENV.NODE_ENV === 'production' ? productionFormat : developmentFormat,
  transports: [new winston.transports.Console()],
});

const morganMiddleware = morgan(
  function (tokens: TokenIndexer, req, res) {
    return JSON.stringify({
      method: tokens.method?.(req, res) ?? '',
      url: tokens.url?.(req, res) ?? '',
      status: Number.parseFloat(tokens.status?.(req, res) ?? '0'),
      content_length: tokens.res?.(req, res, 'content-length') ?? 0,
      response_time: Number.parseFloat(tokens['response-time']?.(req, res) ?? '0'),
    });
  },
  {
    stream: {
      write: (message) => {
        const data = JSON.parse(message);
        logger.info(`incoming-request`, data);
      },
    },
  },
);

export { logger, morganMiddleware };
