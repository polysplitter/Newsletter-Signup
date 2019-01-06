const express = require('express')
const request = require('request')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res, next) => {
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email

    console.log(`${firstname} ${lastname} ${email}`)
})

let server = app.listen(3000, () => {
    console.log('Server is running on port: 3000')
})

function stop() {
    server.close()
}

module.exports = server