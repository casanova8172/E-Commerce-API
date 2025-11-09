const productService = require("../services/productService");

const getAllProduct = (req, res) => {
    const message = productService.getAllProduct();
    res.send(message);
};

const getProductById = (req, res) => {
    const Pid = req.params.id;
    const message = productService.getProductById(Pid);
    res.send(message);
};

const addNewProduct = (req, res) => {
    const message = productService.addNewProduct();
    res.send(message);
};

module.exports = {
    getAllProduct,
    getProductById,
    addNewProduct
};
