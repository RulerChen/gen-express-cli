import request from 'supertest';
import express from 'express';

const app = express();

app.get('/api/user', (req, res) => {
  res.status(200).json([
    { name: 'RulerChen', descrition: 'Author of this project' },
    { name: 'joshtu0627', descrition: 'Author of this project' },
  ]);
});

describe('GET /api/user', () => {
  it('should return 200 and users', async () => {
    const response = await request(app).get('/api/user');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { name: 'RulerChen', descrition: 'Author of this project' },
      { name: 'joshtu0627', descrition: 'Author of this project' },
    ]);
  });
});
