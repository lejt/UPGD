const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    title: {type: String},
    image: {type: String},
    link: {type: String},
    price: {type: Number},
    shipping: {type: String},
}, {
    timestamps: true
});

module.exports = productSchema;