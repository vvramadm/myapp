// backend/test/app.test.js
const request = require('supertest');
const app = require('../src/app'); // your Express entry point

describe('GET /health', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'OK' });
  });
});
