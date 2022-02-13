import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import  { Navigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage({user, setUser}) {
    return (
        <div className="login_container">
            {user ? <Navigate to="/" /> : <LoginForm setUser={setUser}/>}
        </div>
    )
}