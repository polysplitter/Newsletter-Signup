const express = require('express')
const request = require('request')
const config = require('./config')

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

    let data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    }

    let jsonData = JSON.stringify(data)

    let options = {
        url: `https://us7.api.mailchimp.com/3.0/lists/${config.uniqueID}`,
        method: 'POST',
        headers: {
            "Authorization": `kyle ${config.key}`
        },
        // body: jsonData
    }

    request(options, (error, response, body) => {
        if(error) {
            res.sendFile(__dirname + "/failure.html")
        } else {
            if(response.statusCode === 200) {
                res.sendFile(__dirname + "/success.html")
            } else {
                res.sendFile(__dirname + "/failure.html")
            }
        }
    })
})

// allow for retry
app.post('/failure', (req, res, next) => {
    res.redirect('/')
})

module.exports = app