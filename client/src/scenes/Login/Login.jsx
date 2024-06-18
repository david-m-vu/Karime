import "./Login.css"
import { useRef, useState, useEffect } from "react";

const Login = () => {
    const usernameRef = useRef();
    const errRef = useRef();
    
    return (
        <div id="Login" className="z-50 flex w-full h-full justify-center items-center ">
            <form>
                <label htmlFor="user">Username:</label>
                <input type="text" id="user" name="user" /><br></br>
                <label htmlFor="user">Password:</label>
                <input type="password" id="pass" name="pass" /><br></br>
            </form>
        </div>
    )
}



export default Login;