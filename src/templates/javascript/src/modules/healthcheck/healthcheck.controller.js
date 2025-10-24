export const healthcheckController = {
  // GET /health
  getHealth: (_req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Server is healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  },
};
