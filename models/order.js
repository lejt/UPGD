const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  item: itemSchema,
  qty: {type: Number, default: 1},
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

orderSchema.methods.addItemToCart = async function(productTitle, productPrice, productShipping, productImage, productLink) {
    
    const cart = this;

    const lineItem = cart.lineItems.find(lineItem => lineItem.item.title === productTitle)

    if (lineItem) {
      console.log('Already in cart, so +1 quantity to: '+lineItem);
      lineItem.qty += 1;
    } else {
      // adds whole item to cart if not in cart already
      function findPeriodIdx(data) {
        return data.indexOf(".");
      }
      // converts price type string to float
      let periodIdx = findPeriodIdx(productPrice);
      productPrice = parseFloat(productPrice.slice(2,periodIdx+3));
  
      // checks if there is shipping cost and converts to float
      if (productShipping.includes('$')) {
        periodIdx = findPeriodIdx(productShipping);
        productShipping = parseFloat(productShipping.slice(1,periodIdx+3));
      } else {
        productShipping = 0;
      }
  
      const item = {
        title: productTitle,
        price: productPrice,
        shipping: productShipping,
        image: productImage,
        link: productLink,
      }
  
      cart.lineItems.push({item});
    }

    return cart.save();
}

module.exports = mongoose.model('Order', orderSchema);
