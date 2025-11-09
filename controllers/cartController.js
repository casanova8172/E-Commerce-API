const getCartForUser = (req, res) => {
    const uid = req.params.userid;
    res.send(`Fetching cart for user with ID: ${uid}`)
};

const addProductToCart = (req, res) => {
    const uid = req.params.userid;
    res.send(`Adding product to cart for user with ID: ${uid}`);
};

module.exports = {
    getCartForUser,
    addProductToCart
};