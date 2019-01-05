const express = require('express')
const request = require('request')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/signup.html")
})

app.listen(3000, () => {
    console.log('Server is running on port: 3000')
})