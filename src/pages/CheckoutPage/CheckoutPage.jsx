import { useEffect } from 'react';
import "./CheckoutPage.css"
import * as ordersAPI from '../../utilities/orders-api';

export default function CheckoutPage({cart, setCart}) {

    console.log("CHECKOUT PAGE HERE: ");
    console.log(cart.lineItems);

    return (
        <div className="checkout">
            <aside className="checkout_payment">
                <h3>Payment Information here</h3>
            </aside>
            <aside className="checkout_cart">
                <h3>Cart and totals here</h3>
                {cart.lineItems.length ? cart.lineItems.length : <h1>Cart is EMPTY</h1>}
            </aside>
        </div>
    )
}