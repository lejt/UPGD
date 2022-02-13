const Order = require('../../models/order');

module.exports = {
    getPayment,
};
// Require stripe in backend
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

async function getPayment(req, res) {
    const cart = await Order.getCart(req.user._id);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
      
            line_items: cart.lineItems.map(item => {
                return {
                    price_data: { 
                        currency: 'usd',
                        product_data: {
                            name: item.item.title,
                        },
                        // Stripe API accepts price in units of cents
                        unit_amount: parseFloat(((item.item.price)*100).toFixed(2)),
                    },
                    quantity: item.qty,
                }
            }),
            // for localhost testing
            // success_url: `http://localhost:3000/checkout/completed`,
            // cancel_url: `http://localhost:3000/`

            // for deployment 
            success_url: `https://u-p-g-d.herokuapp.com/checkout/completed`,
            cancel_url: `https://u-p-g-d.herokuapp.com/`
    })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}