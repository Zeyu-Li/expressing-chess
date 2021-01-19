// https://www.youtube.com/watch?v=Ud5xKCYQTjM&ab_channel=WebDevSimplified
// 1:00

import express from 'express'
import data from './data/data.json'
import bcrypt from 'bcrypt'

const app = express()
const PORT = 3000

// login
const users = []

// TODO: sockets

app.use(express.static('public'))
app.use(express.json())

// client side
app.get('/items', (request, response) => {
    // gets data
    response.json(data)
})

app.post('/users', async (request, response) => {
    try {
        const hash = await bcrypt.hash(request.body.password, 10)
        users.push({name: request.body.name, password: hash})
        response.status(201).send()
    } 
    catch(err) {
        response.status(500).send()
    }
})

app.post('/user-login', async (request, response) => {
    const user = users.find(user => user.name = request.body.name)
    if (user == null) {
        return response.status(400).send()
    }
    try {
        bcrypt.compare(request.body.password, user.password)
    } 
    else {
        response.send("Error")
    } 
    catch(err) {
        response.status(500).send()
    }
})

// done on server side
app.listen(PORT)
