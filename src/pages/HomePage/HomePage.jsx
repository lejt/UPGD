import React, { useEffect } from "react";
import "./HomePage.css";
import * as ordersAPI from '../../utilities/orders-api';
import SlideShow from "../../components/SlideShow/SlideShow";

export default function HomePage({ user, setCart }) {

    useEffect(function() {
        if (user) {
            console.log('There is a user')
            async function getCart() {
                console.log("running useEffect getCart")
                const cart = await ordersAPI.getCart();
                setCart(cart);
            }
            getCart();
        } else return null;
        console.log('There is no user')
    },[]);

    return (
        <div className="home">
            <div className="home_container">
                {/* <img src="https://www.teahub.io/photos/full/247-2472079_weekly-wallpaper-backgrounds-computer-components.jpg" 
                alt=""
                className="home_banner" 
                /> */}
                <SlideShow />

                <div className="home_category">
                    
                    <div className="home_category_options">
                        <img src="https://c1.neweggimages.com/ProductImage/83-360-237-02.jpg" alt="" />
                        <h4 className="subtitle is-6">PreBuilts</h4>
                    </div>
                    <div className="home_category_options">
                        <img src="https://c1.neweggimages.com/ProductImage/14-930-049-01.jpg" alt="" />
                        <h4 className="subtitle is-6">Graphic Cards</h4>
                    </div>
                    <div className="home_category_options">
                        <img src="https://c1.neweggimages.com/ProductImage/19-113-665-V01.jpg" alt="" />
                        <h4 className="subtitle is-6">Processors</h4>
                    </div>
                    <div className="home_category_options">
                        <img src="https://c1.neweggimages.com/ProductImage/23-126-558-V01.jpg" alt="" />
                        <h4 className="subtitle is-6">Keyboards</h4>
                    </div>
                    <div className="home_category_options">
                        <img src="https://c1.neweggimages.com/ProductImage/26-249-235-V10.jpg" alt="" />
                        <h4 className="subtitle is-6">Headsets</h4>
                    </div>
                    <div className="home_category_options">
                        <img src="https://c1.neweggimages.com/ProductImage/20-232-476-S01.jpg" alt="" />
                        <h4 className="subtitle is-6">Memory</h4>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}