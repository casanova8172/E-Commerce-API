const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Fetching all products")
})

router.get('/:id', (req, res) => {
    const Pid = req.params.id;
    res.send(`Fetching product with ID:${Pid}`)
})

router.post('/', (req, res) => {
    res.send("Adding a new product");
})

module.exports = router;