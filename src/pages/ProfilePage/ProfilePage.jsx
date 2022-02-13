import "./ProfilePage.css";
import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderHistoryList from '../../components/OrderHistoryList/OrderHistoryList';

export default function ProfilePage({user, orders, setOrders, setCart}) {

    useEffect(function () {
        // Load previous orders (paid)
        async function fetchOrderHistory() {
          const orders = await ordersAPI.getOrderHistory();
          setOrders(orders || null);
        }
        fetchOrderHistory();

        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
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

            <h4 className="profile_orders title is-4">Order History</h4>
            {orders[0] 
            ?
            orders.map((order,idx)=> <OrderHistoryList key={idx} order={order} />)
            :
            <div className="is-flex is-justify-content-center">
                <h5 className="subtitle is-6">- No past orders -</h5>
            </div>
            }
        </div>
    )
}