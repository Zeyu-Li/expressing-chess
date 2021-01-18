// https://www.youtube.com/watch?v=Ud5xKCYQTjM&ab_channel=WebDevSimplified
// 1:00

import express, { request, response } from 'express'
import data from './data/data.json'

const app = express()
const PORT = 3000

// TODO: sockets

app.use(express.static('public'))

// client side
app.get('/items', (request, response) => {
    // gets data
    response.json(data)
})

app.post('/new', (request, response) => {
    response.send(`Hello post from ${PORT}`)
})

app.put('/item', (request, response) => {
    response.send(`Hello, put from ${PORT}`)
})

app.delete('/item', (request, response) => {
    response.send(`Hello, delete from ${PORT}`)
})

// done on server side
app.listen(PORT, () => {
    console.log('hello world!')
})
