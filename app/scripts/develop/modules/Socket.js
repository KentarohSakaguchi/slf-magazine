import io from 'socket.io-client';

const socketFn = () => {

  const socket = io.connect('http://localhost:3000');

  socket.on('reload', () => {
    // location.reload();
    console.log('reload');
  });
};

socketFn();
