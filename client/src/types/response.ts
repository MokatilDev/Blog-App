interface SuccessResponse {
    statusCode: number,
    message: string,
    data?: unknown
}

interface ErrorResponse {
    statusCode: number,
    errorType: string,
    message: string
}

export type { SuccessResponse, ErrorResponse }