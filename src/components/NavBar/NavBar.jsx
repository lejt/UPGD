import React, { useState }  from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import * as paymentsAPI from '../../utilities/payments-api';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import NavCheckout from "../../components/NavCheckout/NavCheckout";

export default function NavBar({user, setUser, cart, setCart, handleChangeQty, handleDeleteItem}) {
    const [isDropDownActive, setIsDropDownActive] = useState(false);

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
        <nav className="navbar is-black">
            <div className="navbar-brand">
                <Link to="/">
                    <div className="navbar-item">
                        <h1 className="btn-shine title is-3">// UPGD</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/products" className="navbar-item navbar_tabs">
                        <span>All Products</span>
                    </Link>
                    <Link to="/products/peripherals" className="navbar-item navbar_tabs">
                        <span>Peripherals</span>
                    </Link>
                    <Link to="/products/accessories" className="navbar-item navbar_tabs">
                        <span>Accessories</span>
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        {user ?
                        <>
                            <span className="navbar-link">
                                <h1>Hello, {user.name}</h1>
                            </span>
                            <div className="navbar-dropdown">
                                <Link to="/profile" className="navbar-item">
                                    Profile
                                </Link>
                                <Link to="" onClick={handleLogOut} className="navbar-item">
                                    Log Out
                                </Link>
                            </div>    
                        </>
                        :
                        <>
                            <span className="navbar-link">
                                <h1>Login/Sign Up</h1>
                            </span>
                            <div className="navbar-dropdown">
                                <Link to="/login" className="navbar-item">
                                    Log In
                                </Link>
                                <Link to="/signup" className="navbar-item">
                                    Sign Up
                                </Link>
                            </div>    
                        </>
                        }
                    </div>
                    
                    <div className={ isDropDownActive ? 'navbar-item has-dropdown is-active': 'navbar-item has-dropdown' } >
                        <span className="navbar-link" onClick={toggleCheckoutDropDown}>
                            <div>
                                <ShoppingBasketSharpIcon/>
                                <span className="header_basketCount">
                                    {cart && cart.lineItems
                                    ?
                                    cart.lineItems.length
                                    :
                                    0
                                    }
                                </span>
                            </div>
                        </span>

                        <div className="navbar-dropdown is-right navbar_checkout_dropdown" >
                            {cart && cart.lineItems.length
                            ?
                            cart.lineItems.map((item,idx)=> <NavCheckout key={idx} item={item} handleChangeQty={handleChangeQty} handleDeleteItem={handleDeleteItem} />)
                            :
                            <h5 className="title is-6 is-flex is-justify-content-center"><br/>- No Items Added Yet -</h5>
                            }
                            
                            <hr className="navbar-divider"/>

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