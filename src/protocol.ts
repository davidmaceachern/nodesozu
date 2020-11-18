import { CommandRequest, CommandResponse } from './command'

export function encode(statusRequest: CommandRequest): Buffer {
    let stringifiedCommand = JSON.stringify(statusRequest)
    const stringifiedCommandBuffer = Buffer.from(stringifiedCommand)
    const zeroByteBuffer = new Uint8Array([0])
    const totalLength = stringifiedCommandBuffer.length + zeroByteBuffer.length
    const encodedMessage = Buffer.concat([stringifiedCommandBuffer, zeroByteBuffer], totalLength)
    return encodedMessage
}

export function decode(message: Buffer): CommandResponse {
    const removeZeroByte = message.slice(0, message.length-1)
    const response = removeZeroByte.toString()
    const statusResponse = JSON.parse(response)
    return statusResponse
}   