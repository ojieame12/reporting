const request = require('supertest');
const app = require('../src/server');

// Test validation middleware

describe('Validation Middleware', () => {
  it('should reject manual entry without required fields', async () => {
    const res = await request(app)
      .post('/api/manual-entry')
      .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toMatchObject({
      success: false,
      error: {
        code: 400,
        message: 'Validation Error'
      }
    });
    expect(res.body.error.details).toEqual(expect.arrayContaining([
      expect.objectContaining({ field: 'designerId', message: 'Required field' }),
      expect.objectContaining({ field: 'date', message: 'Required field' }),
      expect.objectContaining({ field: 'description', message: 'Required field' }),
      expect.objectContaining({ field: 'hours', message: 'Required field' }),
      expect.objectContaining({ field: 'source', message: 'Required field' })
    ]));
  });

  it('should validate Jira ticket parameters', async () => {
    const res = await request(app)
      .get('/api/jira/tickets')
      .query({ project: '123' });
    expect(res.statusCode).toEqual(200);
  });
});
