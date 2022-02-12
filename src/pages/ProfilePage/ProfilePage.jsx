import "./ProfilePage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderHistoryList from '../../components/OrderHistoryList/OrderHistoryList';

export default function ProfilePage({user, orders, setOrders}) {
    // const [orders, setOrders] = useState([]);

    useEffect(function () {
        // Load previous orders (paid)
        async function fetchOrderHistory() {
          const orders = await ordersAPI.getOrderHistory();
          setOrders(orders || null);
        }
        fetchOrderHistory();
    }, []);


    return (
        <div className="profile_page">
            <div className="profile_header">
                <div className="profile_info">
                    <p className="subtitle is-3"><strong>{user.name}'s Page</strong></p>
                </div>
                <div className="profile_info">
                    <p>Email: {user.email}</p>
                </div>
            </div>

            <hr/>

            <h4 className="profile_orders title is-4">Order History</h4>
            {orders.map((order,idx)=>console.log(order))}
            {orders.map((order,idx)=> <OrderHistoryList key={idx} order={order} />)}
        </div>
    )
}