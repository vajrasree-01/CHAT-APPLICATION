const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Broadcast when a user sends a message
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Send to all clients
  });

  // Notify when a user disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});