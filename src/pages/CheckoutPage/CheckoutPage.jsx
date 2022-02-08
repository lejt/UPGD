import { useEffect } from 'react';
import "./CheckoutPage.css"

export default function CheckoutPage({cart, setCart}) {

    console.log("CHECKOUT PAGE HERE: ");
    console.log('item id: '+ cart.lineItems[0]._id);
    console.log('item title: '+ cart.lineItems[0].item.title);
    const lineItems = cart.lineItems.map(item => item)
    return (
        <div className="checkout">
            <aside className="checkout_payment">
                <h3>Payment Information here</h3>
            </aside>
            <aside className="checkout_cart">
                <h3>Cart and totals here</h3>
                {cart.lineItems.length 
                ? 
            
                // cart.lineItems.map((i,idx)=> console.log(i)) 
                // console.log(cart.lineItems[0])
                <h1>{cart.lineItems.length}</h1>
                : 
                <h1>Cart is EMPTY</h1>}
            </aside>
        </div>
    )
}