import { describe, it } from 'mocha';
import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

const user = {
  email: 'kaalikas@porgand.ee',
  password: 'porgand',
};

let token: string;
let excuseId: number;

/* describe('Jobs controller', () => {
  describe('GET /jobs', () => {
    it('responds with error message and status 401', async () => {
      const response = await request(app).get('/users');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body.error).to.equal('No token provided');
    });
  });
  describe('POST /jobs', () => {
    it('responds with error message and status 401', async () => {
      const response = await request(app).post('/jobs');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body.error).to.equal('No token provided');
    });
  });
}); */
describe('Jobs controller', () => {
  describe('GET /jobs', () => {
    it('responds with code 200 and token after login', async () => {
      const response = await request(app)
        .post('/login')
        .send(user);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('token');
      expect(response.body.token).to.be.a('string');
      token = response.body.token;
    })},)})