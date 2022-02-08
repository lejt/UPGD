const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    title: {type: String},
    image: {type: String},
    link: {type: String},
    price: {type: String},
    shipping: {type: String},
}, {
    timestamps: true
});

module.exports = itemSchema;