const request = require('request')
const app = require('./app.js')

describe('test root path', () => {
    it('It should response the GET Method', (done) => {
        request('/', (error, response, body) => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
})