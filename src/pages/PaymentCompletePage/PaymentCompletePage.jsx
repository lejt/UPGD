import "./PaymentCompletePage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function PaymentCompletePage({user}) {
    const [orders, setOrders] = useState([]);

    useEffect(function() {
        // set isPaid to true (remove stuff from cart)
        async function completeCheckout() {
            await ordersAPI.checkout();
        }
        completeCheckout();

        // fetch latest old order
        async function fetchOrderHistory() {
            const orders = await ordersAPI.getOrderHistory();
            setOrders(orders);
        }
        fetchOrderHistory();

    }, []);

    return (
        <div>
            <h1>Your order has been completed!</h1>
            <h2>Thank you for your purchase, {user.name}! </h2>

            {console.log(orders[0])}
            {/* {orders.lineItems.map(item=> console.log(item.item.title))} */}
            {/* <p>{orders}</p> */}

        </div>
    )
}