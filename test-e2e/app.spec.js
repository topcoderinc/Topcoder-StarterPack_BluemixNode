import supertest from 'supertest';
import app from '../src/app';

describe('E2E tests', () => {
  let request;

  before(() => {
    request = supertest(app);
  });

  it('should return success in GET /test', (done) => {
    request.get('/api/test').expect(200, {success: true}, done);
  });
});
