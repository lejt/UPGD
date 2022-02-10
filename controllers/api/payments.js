const Order = require('../../models/order');

module.exports = {
    getPayment,
};

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// A cart is the unpaid order for a user
async function getPayment(req, res) {
    console.log('made it to controller payment')
    const cart = await Order.getCart(req.user._id);
 
    cart.lineItems.forEach(item=> console.log(item.item.title+": "+item.item.price));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
      
            line_items: cart.lineItems.map(item => {
                console.log(typeof parseInt(item.item.price*100).toFixed(2))
                return {
                    price_data: { 
                        currency: 'cad',
                        product_data: {
                            name: item.item.title,
                        },
                        unit_amount: parseInt(((item.item.price)*100).toFixed(2)),
                    },
                    quantity: item.qty,
                }
            }),

            success_url: `${process.env.CLIENT_URL}/`,
            cancel_url: `${process.env.CLIENT_URL}/`
    })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}