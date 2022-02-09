import React, { useState }  from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";
import * as paymentsAPI from '../../utilities/payments-api';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';

export default function NavBar({user, setUser, cart}) {
    const [isDropDownActive, setIsDropDownActive] = useState(false);

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    async function handleCheckout(evt) {
        evt.preventDefault();
        console.log('Clicked from dropdown')
        const payment = await paymentsAPI.getPayment();
    }
    function toggleCheckoutDropDown(evt) {
        setIsDropDownActive(!isDropDownActive);
    }
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* <Link to="/"><img src="" width="112" height="28" /></Link> */}
                <Link to="/"><h1 className="title logoName">UPGD</h1></Link>
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
                        <>
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
                        </>
                        :
                        <>
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
                        </>
                        }
                    </div>
                    {/* <Link to="/checkout" className="navbar-item">
                        <ShoppingBasketSharpIcon/>
                        <span className="header_basketCount">0</span>
                    </Link> */}
                    
                    <div className={ isDropDownActive ? 'navbar-item has-dropdown is-active': 'navbar-item has-dropdown' } onClick={toggleCheckoutDropDown}>
                            <span className="navbar-link">
                                <ShoppingBasketSharpIcon/>
                                <span className="header_basketCount">0</span>
                            </span>
                            <div className="navbar-dropdown is-right navbar_checkout_dropdown" >
                        
                                {cart 
                                ?
                                // <h1>cart.lineItems.length </h1>
                                cart.lineItems.map((item,idx)=> <p>{item.item.title} x{item.qty}<br/><br/></p>)
                                :
                                <h5>No items added</h5>
                                }

                                <hr class="navbar-divider"/>
                                <div className="navbar_checkout_button">
                                    <button onClick={handleCheckout} className="button is-fullwidth is-warning">Checkout</button>
                                </div>
                            </div>    
                    </div>
                </div>
            </div>
        </nav>
    )
}