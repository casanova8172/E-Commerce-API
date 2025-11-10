const express = require('express')
const app = express()

// fetching routers
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes')
const cartRouter = require('./routes/cartRoutes')

app.use(express.static('public'));
app.use(express.json());

// handlers for user, products and card
app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(4000, () => {
    console.log('Sever is running at port:4000');
})