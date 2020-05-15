const path = require('path')
const express = require('express')
const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)


const users = {}

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    // socket.emit('chat-message', 'Hello World')

    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {msg: message, name: users[socket.id]})
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})




http.listen(3000, () => {
    console.log('listening on port 3000')
})

// this is not needed for creating socket server

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

// const port = process.env.PORT || 4000
// app.listen(port, () => {
//     console.log(`server is up on port ${port}`)
// })