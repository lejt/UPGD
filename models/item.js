const mongoose = require('mongoose');

// import product schema
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);

