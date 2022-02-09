const Order = require('../../models/order');

module.exports = {
    getPayment,
};
const storeItems = new Map([
    [1, {priceInCents: 10000, name: 'GPU'}],
    [2, {priceInCents: 5000, name: 'CPU'}],
])
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

            // req.body should contain:
            // item.id
            // item.quantity

            // store item should contain: 
            // item.item.title, item.item.price (converted to nums)...

            // pass cart to req.body, dont need id

            // line_items: req.body.items.map(item => {
            //     const storeItem = storeItems.get(item.id)
            //     return {
            //         price_data: { 
            //             currency: 'cad',
            //             product_data: {
            //                 name: storeItem.name,
            //             },
            //             unit_amount: storeItem.priceInCents
            //         },
            //         quantity: item.quantity
            //     }
            // }),
      
            line_items: cart.lineItems.map(item => {
                return {
                    price_data: { 
                        currency: 'cad',
                        product_data: {
                            name: item.item.title,
                        },
                        unit_amount: item.item.price*100,
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