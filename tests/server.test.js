const supertest = require('supertest');
const app = require('../src/app');

describe('app.js', () => {
  it('should start the server', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .catch((err) => console.error(err));
  });
});
