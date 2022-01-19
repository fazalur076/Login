const request = require('supertest');
const knex = require('../db/knex');
const expect = require('chai').expect;
const app = require('../app');

const fixtures = require('./fixtures');

describe('CRUD employee', () => {
    Before(() => {
        // run migation
        knex.migrate.latest()
            .then(() => {
                //run seeds
                return knex.seed.run();
            }).then(() => done());
        });
    
        it('List all Records', (done) => {
            request(app)
                .get('api/employee')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => {
                      expect(response.body).to.be.a('array');
                      expect(response.body).to.deep.equal(fixtures.employee);
                      done();
            });
        });

        it('Lists a Record by id', (done) => {
            request(app)
                .get('api/employee/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => {
                      expect(response.body).to.be.a('object');
                      expect(response.body).to.deep.equal(fixtures.employee);
                      done();
            });

            it('creates a record', (done) => {
                request(app)
                  .post('/api/employee')
                  .send(fixtures.employee)
                  .set('accept', 'application/json')
                  .expect('Content-Type', '/json/')
                  .expect(200)
                  .then((response) => {
                        expect(response.body).to.be.a('object');
                        fixtures.employee.id = response.body.id;
                        expect(response.body).to.deep.equal(fixtures.employee);
                        done();
                  });
            });
        });
    });