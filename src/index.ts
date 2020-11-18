import net from 'net'
import { CommandRequest, CommandResponse } from './command'
import { encode, decode } from './protocol'

export class Client {

  private socketPath: string
  private socket: net.Socket
  private pendingCommand: string

  constructor(socketPath: string) {
    this.socketPath = socketPath
    this.socket = this.connectSocket()
    this.pendingCommand = '' 
  }

  private connectSocket(): net.Socket {
    const socket = net.connect({ path: this.socketPath })
    socket.on('connect', () => { this.handleConnect() })
    socket.on('close', () => this.handleClose())
    socket.on('error', e => this.handleError(e))
    socket.on('data', chunk => this.handleData(chunk))
    return socket
  }

  private handleConnect(): void {
    console.log('Client connected')
  }

  private handleClose(): void {
    this.socket.removeAllListeners()
  }

  private handleError(err: Error): void {
    throw new Error(`Handling error: ${err}`)
  }

  private handleData(message: Buffer): void {
    try {
      const response = decode(message) as CommandResponse
      if (response.id == this.pendingCommand) {
        this.pendingCommand = ''
        // TODO: if response.status is OK
        // TODO: if response. status is processing
        // TODO: if response. status is Error 
      } 
      return
    } catch (e) {
      throw Error("Failed to parse received message")
    }
  }
  
  async request(command: CommandRequest): void {
    const request = command as CommandRequest
    const message = encode(request)
    this.socket.write(message)
  }

  close(): void {
    this.socket.end()
  }
}