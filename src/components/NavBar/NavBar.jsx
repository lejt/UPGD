import React, { useState, useEffect }  from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import * as ordersAPI from "../../utilities/orders-api";
import * as paymentsAPI from '../../utilities/payments-api';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import NavCheckout from "../../components/NavCheckout/NavCheckout";

export default function NavBar({user, setUser, cart, setCart, handleChangeQty, handleDeleteItem}) {
    const [isDropDownActive, setIsDropDownActive] = useState(false);

    // cart.lineItems.map((item,idx)=> <NavCheckout key={idx} item={item} />)
    
    // console.log(cart)
    // if (!cart) return null;
    // const cartItems =  cart.lineItems.map(item => 
    //     <NavCheckout 
    //         item={item}
    //     />
    // );

    
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    function toggleCheckoutDropDown(evt) {
        setIsDropDownActive(!isDropDownActive);
    }
    async function handleCheckout() {
        if (cart.lineItems.length) {
            await paymentsAPI.getPayment();
        }
    }
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <div className="navbar-item">
                        <h1 className="title is-3">UPGD</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/products" className="navbar-item">
                        <span>All Products</span>
                    </Link>
                    <Link to="" className="navbar-item">
                        <span>Category 1</span>
                    </Link>
                    <Link to="" className="navbar-item">
                        <span>Category 2</span>
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        {user ?
                        <div>
                            <span className="navbar-link">
                                Hello, {user.name}
                            </span>
                            <div className="navbar-dropdown">
                                <Link to="/profile" className="navbar-item">
                                    Profile
                                </Link>
                                <Link to="" onClick={handleLogOut} className="navbar-item">
                                    Log Out
                                </Link>
                            </div>    
                        </div>
                        :
                        <div>
                            <span className="navbar-link">
                                Login/Sign Up
                            </span>
                            <div className="navbar-dropdown">
                                <Link to="/login" className="navbar-item">
                                    Log In
                                </Link>
                                <Link to="/signup" className="navbar-item">
                                    Sign Up
                                </Link>
                            </div>    
                        </div>
                        }
                    </div>
                    
                    <div className={ isDropDownActive ? 'navbar-item has-dropdown is-active': 'navbar-item has-dropdown' } >
                            <span className="navbar-link" onClick={toggleCheckoutDropDown}>
                                <ShoppingBasketSharpIcon/>
                                <span className="header_basketCount">0</span>
                            </span>

                            <div className="navbar-dropdown is-right navbar_checkout_dropdown" >
                            {/* style={ isDropDownActive ? {position: "sticky"} : null} */}
                                {cart && cart.lineItems.length
                                // {cart
                                ?
                                // <h1>there are cart items</h1>
                                // cartItems
                                cart.lineItems.map((item,idx)=> <NavCheckout key={idx} item={item} handleChangeQty={handleChangeQty} handleDeleteItem={handleDeleteItem} />)
                                :
                                <h5 className="title is-6 is-flex is-justify-content-center"><br/>- No Items Added Yet -</h5>
                                }
                                
                                <hr className="navbar-divider"/>
                    
                                {/* <h2>TOTAL QTY: {cart.totalQty}</h2>
                                <h2>SUBTOTAL: ${cart.orderTotal.toFixed(2)}</h2> */}

                                <div className="navbar_checkout_button">
                                    <button onClick={handleCheckout} className="button is-fullwidth is-warning title is-6">Checkout</button>
                                </div>
                            </div>    
                           
                    </div>
                </div>
            </div>
        </nav>
    )
}