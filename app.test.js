const request = require('supertest')
let server;

beforeEach(() => {
    server = require('./app')
})
afterEach(() => {
    server.stop()
})

test('It should response the GET Method', done => {
    request(server).get('/').expect(200, done)
})