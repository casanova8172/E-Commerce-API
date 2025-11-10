const path = require('path');
// Get all products
const getAllProduct = () => {
    return path.join(__dirname, '../view/productView.html');
};

// Get product by ID
const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

// Add new product
const addNewProduct = () => {
    return "";
};

module.exports = {
    getAllProduct,
    getProductById,
    addNewProduct
};
