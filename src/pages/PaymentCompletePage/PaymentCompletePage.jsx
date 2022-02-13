import "./PaymentCompletePage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import PaymentCompleteItems from "../../components/PaymentCompleteItems/PaymentCompleteItems";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

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
    
    function toDateString(text) {
        const d = new Date(text);
        let dateStr = d.toLocaleString();
        return dateStr;
    }

    return (
        <div>
            <div className="payment_msg">
                <h1 className="title is-1">Your order has been completed!</h1>
                <h2 className="subtitle is-3">Thank you for your purchase, {user.name}! </h2>
                {/* <CheckCircleIcon /> */}
                <svg className="payment_check_icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                    <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>
                <br/>
            </div>


            {console.log(orders)}
            {console.log(orders[0])}
            {/* {orders.lineItems.map(item=> console.log(item.item.title))} */}
            {/* {orders[0].map((order,idx)=> <OrderHistoryList key={idx} order={order} />)} */}
            {/* {orders[0].lineItems.map(items => <PaymentCompleteItems items={items} />)} */}
            {/* TOTAL: ${orders[0].orderTotal} */}
            {orders[0]
            ?
            <div className="card">
                <div className="card-header">
                    <div>
                        {toDateString(orders[0].updatedAt)}
                    </div>
                    <div>
                        Order ID: {orders[0]._id}
                    </div>
                </div>
                <div className="card_content">
                    {orders[0].lineItems.map(items => <PaymentCompleteItems items={items} />)}
                </div>
                <hr/>
                <div className="payment_total">
                    <p className="title is-4"><strong>Total: </strong><span>${(orders[0]).orderTotal.toFixed(2)}</span></p>
                </div>
            </div>
            // console.log(orders[0].lineItems)
            :
            <h5>nothing loaded yet</h5>
            } 
            <Link to='/products'>
                <div className="payment_back_to_shopping is-flex is-justify-content-center">
                    <button className="button is-info">Back to Shopping</button>
                </div>
            </Link>
        </div>
    )
}