const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    title: {type: String},
    image: String,
    // one category has many items
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number, default: 0},
    rating: {type: Number, default: 3},
    desc: {type: String},

}, {
    timestamps: true
});

module.exports = productSchema;