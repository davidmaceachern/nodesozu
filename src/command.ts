export interface CommandRequest {
    id: string
    version: number
    type: string
    data: {
        type: string
    }
    worker_id: number
}

// type status: "OK" | "PROCESSING" | "ERROR"


export interface CommandResponse {
    id: string
    version: number
    status: string
    message: string
    data: null
}