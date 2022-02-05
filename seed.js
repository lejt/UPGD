require('dotenv').config();
require('./config/database');

const Product = require('./models/product');

// title, image, category, price, rating, desc

// (async function() {
//     await Product.deleteMany({});
//     const product = await Product.create([
//         {title: , image: , category: , price: , rating: , desc: },
//     ])
// })