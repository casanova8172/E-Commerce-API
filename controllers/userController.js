const { successResponse, errorResponse } = require('../utils/response');

const getAllUsers = (req, res) => {
    try {
        // Example dummy users
        const users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' }
        ];

        successResponse(res, "Fetched all users successfully", users);
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const addUser = (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return errorResponse(res, "User name is required", 400);
        }

        // Suppose new user added successfully
        const newUser = { id: Date.now(), name };

        successResponse(res, "User added successfully", newUser, 201);
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const getUserById = (req, res) => {
    try {
        const id = req.params.id;

        // Example user fetch logic
        if (id === '1') {
            const user = { id: 1, name: 'John' };
            successResponse(res, `Fetched user with ID: ${id}`, user);
        } else {
            errorResponse(res, `User with ID: ${id} not found`, 404);
        }
    } catch (error) {
        errorResponse(res, error.message);
    }
};

module.exports = {
    getAllUsers,
    addUser,
    getUserById
};
