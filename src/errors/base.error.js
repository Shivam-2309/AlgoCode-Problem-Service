// we are making our own error handling classes
// Thus we can use the Error object of Javascript
// these are the objects which are thrown when the runtime error occurs

// According to docs it is always recommended to keep Error class as the base class for our user defined classes
// Exception is any return that occurs during a runtime
class BaseError extends Error {
    constructor(name, statusCode, description, details) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
        // Error.captureStackTrace(this);
    }
}

module.exports = BaseError;