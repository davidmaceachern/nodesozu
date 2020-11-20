import { Command, CommandResponse } from '../src/command'
import { Client } from '../src/index'

// TODO: add unit test 'mock' server
// currently running as integration tests against local sozu binary
// ./sozu start -c ./config.toml

const SOCKET_PATH: string = '/home/davidmaceachern/github/nodesozu/tmp/sock';
// TODO: fix to work asynchronously
// The net module provides an asynchronous network API for creating stream-based TCP or IPC servers (net.createServer()) and clients (net.createConnection()).
describe('Nodesozu client can process:', () => {
  let socketPath: string = SOCKET_PATH

  it('a single command such as to check the proxy status', async () => {
    let client: Client
    let status: Command = {
      type: "STATUS"
    }

    let statusResponse: CommandResponse = {
      "id": "ID_TEST",
      "version": 0,
      "status": "OK",
      "message": "",
      "data": null
    }

    try {
      client = new Client(socketPath)
      const res = await client.request(status)
      expect(res).toEqual(statusResponse);
    } finally {
      console.log('close the client')
    }
  });

  it('a batch of multiple commands ', async () => {
    let client: Client
    let multipleCommands: Array<Command> = [
      { type: "STATUS" }, 
      { type: "DUMP_STATE" }
    ]

    let statusResponse: CommandResponse = {
      "id": "ID_TEST",
      "version": 0,
      "status": "OK",
      "message": "",
      "data": null
    }

    try {
      client = new Client(socketPath)
      const res = await client.request(multipleCommands)
      expect(res).toEqual(statusResponse);
    } finally {
      console.log('close the client')
    }
  });
});
