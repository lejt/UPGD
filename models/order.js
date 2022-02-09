const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  item: itemSchema,
  qty: {type: Number, default: 1},
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  // 'this' refers to the lineItem subdocument
  return (this.qty*this.item.price)
  // return this.qty * this.item.price;
});

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false}
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
});


orderSchema.virtual('orderTotal').get(function() {
  // 'this' refers to the order document
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
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
      let periodIdx;
      productPrice = (productPrice.replace(',','')).trim();
      productShipping = productShipping.trim();
      console.log(productPrice, productShipping);

      // converts price type string to float
      periodIdx = findPeriodIdx(productPrice);
      console.log('Period index from price: '+ productPrice +periodIdx);

      productPrice = parseFloat(productPrice.slice(1,periodIdx+3));
      console.log('ProductPrice: '+ productPrice);
  
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
