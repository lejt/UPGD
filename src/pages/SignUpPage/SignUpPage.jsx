import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import  { Navigate } from 'react-router-dom';
import './SignUpPage.css';

export default function SignUpPage({user, setUser}) {
    return (
        <div className="signup_container">
            {user ? <Navigate to="/" /> : <SignUpForm setUser={setUser}/>}
        </div>
    )
}