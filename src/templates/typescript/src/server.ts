import { createApp } from './app.js';
import { ENV } from '#src/config/env.js';
import { logger } from '#src/middlewares/logger.js';

const startServer = () => {
  const app = createApp();

  const server = app.listen(ENV.PORT, () => {
    logger.info(`Server started on port ${ENV.PORT}`);
    logger.info(`Environment: ${ENV.NODE_ENV}`);
  });

  // Graceful shutdown
  const gracefulShutdown = (signal: string) => {
    logger.info(`${signal} received. Starting graceful shutdown...`);
    server.close(() => {
      logger.info('Server closed');
      process.exit(0);
    });

    // Force shutdown after 10 seconds
    setTimeout(() => {
      logger.error('Forcing shutdown');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason: Error) => {
    logger.error(`Unhandled Rejection: ${reason.message}`);
    logger.error(reason.stack);
    gracefulShutdown('unhandledRejection');
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (error: Error) => {
    logger.error(`Uncaught Exception: ${error.message}`);
    logger.error(error.stack);
    gracefulShutdown('uncaughtException');
  });
};

startServer();
