const { request, app, getAdminToken } = require('./setup');

describe('Tasks integration tests', () => {
    let token;
    let createdTaskId;

    beforeAll(async () => {
        token = await getAdminToken();
    });

    test('GET /api/tasks should return tasks list', async () => {
        const res = await request(app)
        .get('/api/tasks')
        .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /api/tasks should create a task', async () => {
        const newTask = {
        title: 'Faire les tests integration',
        description: 'Tester les routes du backend',
        priority: 'high',
        };

        const res = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send(newTask);

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe(newTask.title);
        expect(res.body.description).toBe(newTask.description);
        expect(res.body.priority).toBe(newTask.priority);

        createdTaskId = res.body.id;
    });

    test('POST /api/tasks should fail without title', async () => {
        const res = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send({
            description: 'Task without title',
            priority: 'low',
        });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
    });

    test('GET /api/tasks/:id should return created task', async () => {
        const res = await request(app)
        .get(`/api/tasks/${createdTaskId}`)
        .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', createdTaskId);
    });

    test('PUT /api/tasks/:id should update task', async () => {
        const updatedTask = {
        title: 'Tests integration termines',
        description: 'Routes testees',
        priority: 'medium',
        status: 'done',
        };

        const res = await request(app)
        .put(`/api/tasks/${createdTaskId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updatedTask);

        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe(updatedTask.title);
        expect(res.body.description).toBe(updatedTask.description);
        expect(res.body.priority).toBe(updatedTask.priority);
        expect(res.body.status).toBe(updatedTask.status);
    });

    test('DELETE /api/tasks/:id should delete task', async () => {
        const res = await request(app)
        .delete(`/api/tasks/${createdTaskId}`)
        .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(204);
    });

    test('GET /api/tasks/:id should return 404 after deletion', async () => {
        const res = await request(app)
        .get(`/api/tasks/${createdTaskId}`)
        .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty('error');
    });
});