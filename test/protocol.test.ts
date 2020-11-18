import { encode, decode } from '../src/protocol'

describe('Protocol can:', () => {
    it('Encode the status command', () => {
        const statusRequest = {
            "id": "ID_TEST",
            "type": "PROXY",
            "version": 0,
            "data": {
                "type": "STATUS",
            },
            "worker_id": 0
        }

        const expected = 83 
        const encodedCommand = encode(statusRequest)
        const received = encodedCommand.length
        expect(received).toEqual(expected)
    })
    it('Decode status response messages', () => {
        const statusResponse = Buffer.from([123, 34, 105, 100, 34, 58, 34, 73, 68, 95, 84, 69, 83, 84, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 80, 82, 79, 88, 89, 34, 44, 34, 118, 101, 114, 115, 105, 111, 110, 34, 58, 48, 44, 34, 100, 97, 116, 97, 34, 58, 123, 34, 116, 121, 112, 101, 34, 58, 34, 83, 84, 65, 84, 85, 83, 34, 125, 44, 34, 119, 111, 114, 107, 101, 114, 95, 105, 100, 34, 58, 48, 125, 0])
        const expected = {
            "id": "ID_TEST",
            "type": "PROXY",
            "version": 0,
            "data": {
                "type": "STATUS",
            },
            "worker_id": 0
        }
        const received = decode(statusResponse)
        expect(received).toEqual(expected)
    })
})