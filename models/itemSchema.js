const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    title: {type: String},
    image: {type: String},
    link: {type: String},
    price: {type: Number},
    shipping: {type: Number},
}, {
    timestamps: true
});

module.exports = itemSchema;