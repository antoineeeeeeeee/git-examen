const request = require('supertest');
const app = require('../../backend/server');

const adminCredentials = {
  email: 'admin@test.com',
  password: 'password',
};

async function getAdminToken() {
  const res = await request(app)
    .post('/api/auth/login')
    .send(adminCredentials);

  return res.body.token;
}

module.exports = {
  request,
  app,
  adminCredentials,
  getAdminToken,
};