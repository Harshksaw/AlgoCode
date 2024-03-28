const BaseError = require("./BaseError")

const {StatusCodes} = require("http-status-codes");

class NotImplemented extends BaseError{
    constructor(methodName){
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Impelmented Yet!!`)
    }
}

module.exports = NotImplemented