const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
// const open = require('open');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('playVideo', () => {
        io.emit('playVideo');
    });

    socket.on('pauseVideo', () => {
        io.emit('pauseVideo');
      });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// add async after the comma after 3000 to enable the open
server.listen(3000, () => {
    console.log('Server is running on http://localhost3000');
    // Automatically open video.html in the browser
    //await open('http://localhost:3000/video.html');
});