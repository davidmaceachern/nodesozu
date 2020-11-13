//export const sum = (a: number, b: number) => {
//  if ('development' === process.env.NODE_ENV) {
//    console.log('boop');
//  }
//  return a + b;
//};
//const socketPath = './sozu.sock'
const net = require('net');
// const conn = net.createConnection(socketPath);

const client = net.createConnection({ path: './sozu.sock' });
const statusCommand = {
  "id":      "ID_TEST",
  "version": 0,
  "data": {
    "type": "STATUS",
  }
}

client.on('connect', function() {
    console.log('connected to unix socket server');
    client.write(JSON.stringify(statusCommand));
    console.log('Writing status command');
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('end', () => {
    console.log('client disconnected');
});


export const connect = () => {
};



