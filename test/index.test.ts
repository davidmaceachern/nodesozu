import { CommandRequest, CommandResponse } from '../src/command'
import { Client } from '../src/index'

// currently running as integration tests against local sozu binary
// ./sozu start -c ./config.toml

const SOCKET_PATH: string = '/home/davidmaceachern/github/nodesozu/tmp/sock';

describe('Nodesozu client can send the command to:', () => {
  let socketPath: string = SOCKET_PATH

  it('check the proxy status', () => {
    let client: Client
    let statusRequest: CommandRequest = {
      "id": "ID_TEST",
      "type": "PROXY",
      "version": 0,
      "data": {
        "type": "STATUS",
      },
      "worker_id": 0
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
      const res = client.request(statusRequest)
      expect(res).toEqual(statusResponse);
    } finally {
      console.log('close the client')
    }
  });
});
