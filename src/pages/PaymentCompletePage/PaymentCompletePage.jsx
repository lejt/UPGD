import "./PaymentCompletePage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import PaymentCompleteItems from "../../components/PaymentCompleteItems/PaymentCompleteItems";

export default function PaymentCompletePage({user, orders, setOrders}) {

    useEffect(function() {
        // set isPaid to true (remove stuff from cart)
        async function completeCheckout() {
            await ordersAPI.checkout();
            fetchOrderHistory();
        }
        completeCheckout();
        console.log('complete checkout')

        // fetch latest old order
        async function fetchOrderHistory() {
            const orders = await ordersAPI.getOrderHistory();
            setOrders(orders);
        }
        // fetchOrderHistory();
        // console.log('complete fetch history')

    }, []);

    // useEffect(function() {
    //     // fetch latest old order
    //     async function fetchOrderHistory() {
    //         const orders = await ordersAPI.getOrderHistory();
    //         setOrders(orders);
    //     }
    //     fetchOrderHistory();
    //     console.log('complete fetch history')
    // }, [orders])
    

    return (
        <div>
            <h1>Your order has been completed!</h1>
            <h2>Thank you for your purchase, {user.name}! </h2>

            {console.log(orders)}
            {console.log(orders[0])}
            {/* {orders.lineItems.map(item=> console.log(item.item.title))} */}
            {/* {orders[0].map((order,idx)=> <OrderHistoryList key={idx} order={order} />)} */}
            {/* {orders[0].lineItems.map(items => <PaymentCompleteItems items={items} />)} */}
            {/* TOTAL: ${orders[0].orderTotal} */}
            {orders[0]
            ?
            orders[0].lineItems.map(items => <PaymentCompleteItems items={items} />)
            // console.log(orders[0].lineItems)
            :
            <h5>nothing loaded yet</h5>
            } 
            {/* <p>Total: {orders[0].orderTotal}</p> */}
        </div>
    )
}