import assert from 'assert';
import { describe, it } from 'mocha';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

const user = {
  email: 'kaalikas@porgand.ee',
  password: 'porgand',
};

let token: string;
let excuseId: number;

describe('Users controller', () => {
  describe('GET /users', () => {
    it('responds with error message and status 401', async () => {
      const response = await request(app).get('/users');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body.error).to.equal('No token provided');
    });
  });
  describe('login /users', () => {
    it('responds with error message and status 400', async () => {
      const response = await request(app).post('/users');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      expect(response.body.error).to.equal('First name is required');
    });
    
  });

/*   describe('GET /users/:id', () => {
    it('responds with error message and status 400', async () => {
      const response = await request(app).get('/users/:id');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(400);
      
    });
  }); */
});
describe('Login controller', () => {
  describe('POST /login', () => {
    it('responds with token and status 200', async () => {
      const response = await request(app).post('/login').send(user);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
    });
    });
  });




describe('Jobs controller', () => {
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
});