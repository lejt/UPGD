const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  item: itemSchema,
  qty: {type: Number},
}, {
    timestamps: true
});



const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false}
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
});

// statics are methods callable on the Model
// creates a first order in order model if none
orderSchema.statics.getCart = function(userId) {
  // 'this' refers to the Order model
  return this.findOneAndUpdate(
    // query obj
    {user: userId, isPaid: false},
    // update obj
    {user: userId},
    // options obj
    // upsert option creates the doc if it doesn't exist!
    // new option will make sure the updated doc is returned, normally, it will return the doc before the change
    {upsert: true, new: true}
  );
};

orderSchema.methods.addItemToCart = async function(product, productTitle, productPrice, productShipping, productImage, productLink) {
    // this.lineProducts.push({ product })
    const cart = this;
    // console.log("model AddToCart data: "+ productTitle, productPrice, productShipping, productImage, produceLink);

    // console.log("test model product: "+product);

    const item = {
      title: productTitle,
      price: productPrice,
      shipping: productShipping,
      image: productImage,
      link: productLink,
    }

    cart.lineItems.push({item});
    return cart.save();
}

module.exports = mongoose.model('Order', orderSchema);
