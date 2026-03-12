const { request, app } = require('./setup');

describe('Health integration tests', () => {
    test('GET /health should return OK status', async () => {
        const res = await request(app).get('/health');

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status', 'OK');
        expect(res.body).toHaveProperty('timestamp');
    });
});