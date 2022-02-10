import React, { useEffect } from "react";
import "./HomePage.css";
import * as ordersAPI from '../../utilities/orders-api';

export default function HomePage({ user, setCart }) {

    useEffect(function() {
        if (user) {
            async function getCart() {
                console.log("running useEffect getCart")
                const cart = await ordersAPI.getCart();
                setCart(cart);
            }
            getCart();
        };
    },[]);

    return (
        <div className="home">
            <div className="home_container">
                <img src="https://www.teahub.io/photos/full/247-2472079_weekly-wallpaper-backgrounds-computer-components.jpg" 
                alt=""
                className="home_banner" 
                />
                <p>HI I AM THE HOME PAGE</p>
            </div>
        </div>
    )
}