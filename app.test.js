const request = require('supertest')
let app = require('./app')

describe('app returns 200 on get to /', () => {
    it('Should respond with the GET method', done => {
        request(app).get('/').expect(200, done)
    })
})