const express = require('express')
const functions = require('@google-cloud/functions-framework')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World from '/'.")
})

app.get('/hello', (req, res) => {
    res.send("Hello World from '/hello'.")
})

exports.expressApi = functions.http('expressApi', app)
