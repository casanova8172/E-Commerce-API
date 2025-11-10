const onSubmitHandler = (e) => {
    e.preventDefault();

    const product = e.target.productName.value;
    console.log('Product:', product);

    const obj = {
        ProductName: product
    };

    axios.post('http://localhost:4000/products', obj)
        .then((res) => {
            console.log('Response:', res.data.value);
        })
        .catch((err) => {
            console.error('Error:', err.message);
        });
};
