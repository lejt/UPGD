import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            {/* <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}!</span>  
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>  */}
            <img src="" alt="" />
            <div className="header_nav">
                <div className="header_option">
                    <span>All Products</span>
                </div>
                <div className="header_option">
                    <span>Another Category</span>
                </div>
                <div className="header_option">
                    { user ?
                        <Link to="" >
                            <span>Profile</span>
                            {/* drop down with profile option and logout option */}
                        </Link>
                        :
                        <div className="dropdown">
                            <button className="dropbtn">Login/SignUp</button>
                            <div className="dropdown_content">
                                <Link to="/login"><p>Log In</p></Link>
                                <Link to="/signup"><p>Sign Up</p></Link>
                            </div>
                        </div>
                    }
                </div>
                {/* <Link to="" onClick={handleLogOut}>
                    <div className="header_option">
                        <span>Welcome</span>
                        <span>Name</span>
                    </div>
                </Link> */}
            </div>
        
        
        </nav>
    )
}