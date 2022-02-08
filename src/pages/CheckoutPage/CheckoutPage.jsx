import { useEffect } from 'react';
import "./CheckoutPage.css"
import LineItem from "../../components/LineItem/LineItem";
import * as paymentsAPI from '../../utilities/payments-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function CheckoutPage({cart, setCart}) {

    console.log("CHECKOUT PAGE HERE: ");
    // console.log('item id: '+ cart.lineItems[0]._id);
    // console.log('item title: '+ cart.lineItems[0].item.title);

    // useEffect(function() {
    //     async function getCart() {
    //         const cart = await ordersAPI.getCart();
    //         console.log('received back from orders.api')
    //         setCart(cart);
    //     }
    //     getCart();
    // }, []);


    const lineItems = cart.lineItems.map((item, idx) => 
        <LineItem key={idx} item={item} />
    )

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log('Clicked')
        const CARTITEMS = []
        const payment = await paymentsAPI.getPayment();
    }



    // console.log(lineItems)
    // THIS PAGE ERRORS AFTER REFRESH, MAYBE HAS TO DO WITH USE EFFECT NEEDING TO BE ON THIS PAGE
    return (
        <div className="checkout">
            <aside className="checkout_payment">
                <h3>Payment Information here</h3>
                <form action="" method="POST" onSubmit={handleSubmit}>

                    <button type="submit">PAY WITH STRIPE</button>
                </form>
            </aside>
            <aside className="checkout_cart">
                <h3>Cart and totals here</h3>
                {cart.lineItems.length 
                ? 
                // lineItems[0].item.title
                // lineItems.map((item,idx)=> <LineItem key={idx} item={item.item}/> ) 
                // console.log(cart.lineItems[0])
                // <h1>{cart.lineItems.length}</h1>
                lineItems
                : 
                <h1>Cart is EMPTY</h1>}
            </aside>
        </div>
    )
}