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
  return (this.qty*this.item.price)
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
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

// creates a first order in order model if none
orderSchema.statics.getCart = function(userId) {
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

    if (lineItem && lineItem.qty < 5) {
      lineItem.qty += 1;
    } else if (!lineItem) {
      // Adds whole item object to cart if not in cart already

      // Price formatting received from data scraper API, 
      // Remove unwanted characters and converts price type string to float
      function findPeriodIdx(data) {
        return data.indexOf(".");
      }
      let periodIdx;
      productPrice = (productPrice.replace(',','')).trim();
      productShipping = productShipping.trim();

      periodIdx = findPeriodIdx(productPrice);
      productPrice = parseFloat(productPrice.slice(1,periodIdx+3));
  
      // Checks if there is shipping cost and converts to float, Icebox feature
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

orderSchema.methods.setItemQty = function(itemId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem._id.equals(itemId));

  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
}

orderSchema.methods.deleteItem = function(itemId) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem._id.equals(itemId));
  lineItem.remove();
  return cart.save();
}

module.exports = mongoose.model('Order', orderSchema);
