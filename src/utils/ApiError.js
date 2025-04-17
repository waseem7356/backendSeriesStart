class ApiError extends Error{
    constructor(
        statusCode,
        messeage = "something went wrong",
        error  = [],
        stack = ""
         
    ){
        super(messeage)
        this.statusCode = statusCode
        this.data = null
        this.message = messeage
        this.success = false
        this.error = error
        if(stack) {
            this.stack = stack
        }else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export default ApiError;