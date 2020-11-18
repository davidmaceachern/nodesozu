'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var net = _interopDefault(require('net'));

var socketPath = './sozu.sock';

function encode(status) {
  return JSON.stringify(status);
}

var status = {
  "id": "ID_TEST",
  "version": 0,
  "data": {
    "type": "STATUS"
  }
};
console.log('Establishing connection');
var socket = /*#__PURE__*/net.connect({
  path: socketPath
});
console.log('Sending message');
socket.on('connect', function () {
  return socket.write(encode(status) + '\n');
});
socket.on('close', function () {
  return socket.end();
});
socket.on('error', function (e) {
  return Error("Connection Failed " + e);
});
socket.on('data', function () {
  return console.log('Received some data');
}); //        socket.on('data', chunk => handleData(chunk))
//function decode(str: string): JSONMessage {
//  return JSON.parse(str)
//}
//function handleData(chunk: Buffer): void {
//    const response = decode(message.toString()) as JSONMessage
//}
//export const sum = (a: number, b: number) => {
//  if ('development' === "development") {
//    console.log('boop');
//  }
//  return a + b;
//};
//const socketPath = './sozu.sock'
// const net = require('net');
// const conn = net.createConnection(socketPath);
// const socket = net.createConnection({ path: './sozu.sock' });
// const 
//socket.on('connect', function() {
//    console.log('connected to unix socket server');
//    socket.connect()
//    socket.write(JSON.stringify(statusCommand));
//    console.log('Writing status command');
//});
//
//socket.on('data' , function (data: any){
//      console.log("Data received from the server: " , data);
//});
//
//socket.on('error', function(err: any) {
//      console.log('Error in connection:', err);
//});
//
//socket.on('close', function() {
//	console.log('Connection closed');
//    socket.end();
//});
//
//socket.on('end', () => {
//    console.log('client disconnected');
//});
//
//export const connect = () => {
//};
//# sourceMappingURL=nodesozu.cjs.development.js.map
