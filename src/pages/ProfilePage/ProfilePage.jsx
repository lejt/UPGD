import "./ProfilePage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderHistoryList from '../../components/OrderHistoryList/OrderHistoryList';

export default function ProfilePage({user}) {
    const [orders, setOrders] = useState([]);

    useEffect(function () {
        // Load previous orders (paid)
        async function fetchOrderHistory() {
          const orders = await ordersAPI.getOrderHistory();
          setOrders(orders || null);
        }
        fetchOrderHistory();
    }, []);


    return (
        <div>
            <p>
                {user.name}<br/>
                {user.email}
            </p>
            <hr/>
            <h4>Order History</h4>
            {orders.map((order,idx)=>console.log(order))}
            {orders.map((order,idx)=> <OrderHistoryList key={idx} order={order} />)}
        </div>
    )
}