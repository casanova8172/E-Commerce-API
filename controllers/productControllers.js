const getAllProduct = (req, res) => {
    res.send("Fetching all products")
}

const getProductById = (req, res) => {
    const Pid = req.params.id;
    res.send(`Fetching product with ID:${Pid}`);
}

const addNewProduct = (req, res) => {
    res.send("Adding a new product");
}

module.exports = {
    getAllProduct,
    getProductById,
    addNewProduct
};