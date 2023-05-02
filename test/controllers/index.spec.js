import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);

describe('POST /', () => {
    it('should return 200', () => {
        chai.request(app)
        .post('/')
        .send({ number: 1 })
        .then(res => {
            chai.expect(res.status).to.equal(200);
        })
    })
    it('should return 400 if number is not an integer', () => {
        chai.request(app)
        .post('/')
        .send({ number: 1.1 })
        .then(res => {
            chai.expect(res.status).to.equal(400);
        })
    })
    it('should return 400 if number is less than 1', () => {
        chai.request(app)
        .post('/')
        .send({ number: 0 })
        .then(res => {
            chai.expect(res.status).to.equal(400);
        })
    })
    it('should return 400 if number is greater than 100', () => {
        chai.request(app)
        .post('/')
        .send({ number: 101 })
        .then(res => {
            chai.expect(res.status).to.equal(400);
        })
    })
    it('should return 400 if number is not provided', () => {
        chai.request(app)
        .post('/')
        .send({})
        .then(res => {
            chai.expect(res.status).to.equal(400);
        })
    })
});