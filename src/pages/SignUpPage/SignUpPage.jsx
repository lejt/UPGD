import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import  { Navigate } from 'react-router-dom';

export default function SignUpPage({user, setUser}) {
    return (
        <div>
            <h1>Sign Up HERE</h1>
            {user ? <Navigate to="/" /> : <SignUpForm setUser={setUser}/>}
        </div>
    )
}