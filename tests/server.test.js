const supertest = require('supertest');
const app = require('../src/app');

describe('app.js', () => {
  it('should start the server', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .catch((err) => console.error(err));
  });

  it('should start server again', async () => {
    const response = await supertest(app)
      .post('/')
      .expect(200)
      .catch((err) => console.error(err));

    expect(response.body[0].hello).toEqual([1, 2, 3, 4]);
  });
});
