const BaseError = require("../errors/BaseError");


function errorHandler(err, req, res, next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data : {} // This is to make sure that the response always has a data field
        })
    }

    app.use(errorHandler)

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        error: err.details || "Something went wrong",
        data : {} // This is to make sure that the response always has a data field
    })
}
module.exports = errorHandler