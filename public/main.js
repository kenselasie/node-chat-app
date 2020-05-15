
const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')

const name = prompt('What is your name')
appendMsg('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appendMsg(`${data.name}: ${data.msg}`)
})

socket.on('user-connected', name => {
    appendMsg(`${name} connected`)
})

socket.on('user-disconnected', name => {
    appendMsg(`${name} disconnected`)
})


messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMsg(`You: ${message}`)

    if (message == '') {
        return
    } 
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMsg(message) {
    const messageElement = document.createElement('p')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}