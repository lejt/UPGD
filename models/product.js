const mongoose = require('mongoose');

// import product schema
const productSchema = require('./productSchema');

module.exports = mongoose.model('Product', productSchema);

