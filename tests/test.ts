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
import app from '../src/app';

describe('Users controller', () => {
  describe('GET /users', () => {
    it('responds with error message and status 401', async () => {
      const response = await request(app).get('/users');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body.error).to.equal('No token provided');
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
  
});