import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage({setUser}) {
    return (
        <div>
            <h1>Sign Up HERE</h1>
            <SignUpForm setUser={setUser}/>
        </div>
    )
}