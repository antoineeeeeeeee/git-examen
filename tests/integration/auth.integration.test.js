const { request, app, adminCredentials } = require('./setup');

describe('Auth integration tests', () => {
    test('POST /api/auth/login should login successfully', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send(adminCredentials);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
        expect(res.body).toHaveProperty('user');
        expect(res.body.user.email).toBe(adminCredentials.email);
    });

    test('POST /api/auth/login should fail with wrong password', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({
            email: adminCredentials.email,
            password: 'wrongpassword',
        });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
    });

    test('GET /api/tasks should fail without token', async () => {
        const res = await request(app).get('/api/tasks');

        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty('error');
    });
});