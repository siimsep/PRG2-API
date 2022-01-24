import { describe, it } from 'mocha';
import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

const user = {
  email: 'kaalikas@porgand.ee',
  password: 'porgand',
};

let token: string;
let Id: number;

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
    });
    it('responds with code 401 and error message', async () => {
        const response = await request(app)
          .post('/login');
        expect(response.body).to.be.a('object');
        expect(response.body.error).to.equal("Check password");
        expect(response.statusCode).to.equal(401);
        
      });
    it('responds with code 401 and error message', async () => {
        const response = await request(app).get('/jobs')
          //.post('/login');
        expect(response.body).to.be.a('object');
        expect(response.body.error).to.equal("No token provided");
        expect(response.statusCode).to.equal(401);
        
      });
    it('responds with code 401 and error message', async () => {
        const response = await request(app)
          .get('/jobs')
          .set('Authorization', 'Bearer aninvalidtokenforexample');
        expect(response.body).to.be.a('object');
        expect(response.body.error).to.equal("Invalid token");
        expect(response.statusCode).to.equal(401);
        
      });
    it('responds with code 200 and list of jobs', async () => {
        const response = await request(app)
          .get('/jobs')
          .set('Authorization', `Bearer ${token}`);
        expect(response.body).to.be.a('object');
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.key('jobList');
        expect(response.body.jobList).to.be.a('array');
        expect(response.body.jobList.length).to.greaterThan(0); // selleks juhuks kui peaks tulema tühi?
        
      })}),

    describe('POST /jobs', () => {
         it('responds with code 400 and error message', async () => {
            const response = await request(app)
              .post('/jobs')
              .set('Authorization', `Bearer ${token}`);
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(400);
            expect(response.body.error).to.equal("Error in coordinates: no latitude");
          });
          it('responds with code 201 and a message of success!', async () => {
              const response = await request(app)
                .post('/jobs')
                .set('Authorization', `Bearer ${token}`)
                .send({
                  lat: 52,
                  lng: 27,
                  note: 'This is a noteworthy note',
                
                });
              expect(response.body).to.be.a('object');  
              expect(response.statusCode).to.equal(201);            
            });
          it('responds with code 400 and error message', async () => {
              const response = await request(app)
                .post('/jobs')
                .set('Authorization', `Bearer ${token}`)
                .send({
                  lat: 52
                });
              expect(response.body).to.be.a('object');
              expect(response.statusCode).to.equal(400);
              expect(response.body.error).to.equal("Error in coordinates: no longitude");
            }); 
          it('responds with code 400 and error message', async () => {
              const response = await request(app)
                .post('/jobs')
                .set('Authorization', `Bearer ${token}`)
                .send({
                  lat: 52,
                  lng: 27,
                });
              expect(response.body).to.be.a('object');
              expect(response.statusCode).to.equal(400);
              expect(response.body.error).to.equal("Error, please add note");
            })}),
            

            describe('DELETE /jobs/:id', () => {
                 it('responds with code 204', async () => {
                    const response = await request(app)
                      .delete(`/jobs/2`)        // kui ${Id} siis tuleb bad request vastus.. 
                      .set('Authorization', `Bearer ${token}`);
                    expect(response.body).to.be.a('object');
                    expect(response.statusCode).to.equal(204);
                  });}),
                  describe('PATCH /jobs/:id', () => {
                    it('responds with code 200', async () => {
                       const response = await request(app)
                         .patch(`/jobs/1`)        // kui ${Id} siis tuleb bad request vastus.. 
                         .set('Authorization', `Bearer ${token}`)
                         .send({
                           lat:50
                         })
                        
                       expect(response.body).to.be.a('object');
                       expect(response.statusCode).to.equal(200);
                     });})
                })