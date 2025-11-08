const express = require('express')
const router = express.Router()

router.get('/:userid', (req, res) => {
    const uid = req.params.userid;
    res.send(`Fetching cart for user with ID: ${uid}`)
})

router.post('/:userid', (req, res) => {
    const uid = req.params.userid;
    res.send(`Adding product to cart for user with ID: ${uid}`);
})

module.exports = router;