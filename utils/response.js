// Success response
const successResponse = (res, message, data = null, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

// Error response
const errorResponse = (res, message = 'Something went wrong', statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};

module.exports = {
    successResponse,
    errorResponse
};
