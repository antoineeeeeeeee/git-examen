const { request, app, getAdminToken } = require('./setup');

describe('Users integration tests', () => {
    let token;

    beforeAll(async () => {
        token = await getAdminToken();
    });

    test('GET /api/users should return users without password', async () => {
        const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);

        res.body.forEach((user) => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('name');
        expect(user).not.toHaveProperty('password');
        });
    });
});