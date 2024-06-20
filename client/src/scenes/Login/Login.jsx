import "./Login.css"
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/"
import { useNavigate } from "react-router-dom"

import IU from "../../assets/iu.png"
const authBaseURL = import.meta.env.REACT_APP_BACKEND_BASE_URL;

const Login = () => {
    const usernameRef = useRef();
    const errRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // First Name, Last Name, username, password, validatePassword, email,
    const [username, setUsername] = useState("");
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidUsername(username !== "");
    }, [username])

    useEffect(() => {
        setValidPassword(password !== "");
    }, [password])

    useEffect(() => {
        setErrMsg("");
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password ) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            const loggedInResponse = await fetch(`${authBaseURL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            })

            const loggedIn = await loggedInResponse.json();

            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token
                })
            )

            navigate("/")
        } catch (err) {
            if (!err?.message) {
                setErrMsg("No Server Response");
            } else {
                setErrMsg("Registration Failed");
            }
            errRef.current.focus();
        }
    }

    const getInputClassName = (isFocused) => {
        if (isFocused) {
            return "border-b-[6px] border-[#721aed] w-[40vw] transition-all ease-out duration-300 box-border scale-110"
        } else {
            return "border-b-[6px] border-[#3727a1] w-1/3 opacity-50 box-border "
        }
    }

    const getHrClassName = () => {
        if (usernameFocus || passwordFocus) {
            return "transition-all ease-out w-[14vw] h-[3px] bg-[#ffc4ec] duration-300";
        } else {
            return "transition-all ease-in w-[2vw] h-[3px] bg-[#efdbfd]";
        }
    }

    return (
        <div id="Login" className="z-50 flex w-full h-full justify-center items-center flex-col">
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="loginTitle mb-6 flex flex-row justify-center items-center gap-4"><div className={`${getHrClassName()}`}></div>LOGIN<div className={`${getHrClassName()}`}></div></div>

        <form onSubmit={handleSubmit} className="registerForm flex flex-col w-full items-center gap-4">
            <div className={`${getInputClassName(usernameFocus)} flex flex-row `}>
                <label htmlFor="username">Username:</label>
                <input className="formInput bg-transparent grow" type="text" id="username" name="username"
                    ref={usernameRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={!validUsername}
                    aria-describedby="uidnote"
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => setUsernameFocus(false)}
                />
            </div>

            <div className={`${getInputClassName(passwordFocus)} flex flex-row`}>
                <label htmlFor="password">Password:</label>
                <input className="formInput bg-transparent grow" type="password" id="password" name="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={!validPassword}
                    aria-describedby="passwordNote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />
            </div>

            <button className="mainButton bg-gradient-to-r from-[#ffc4ec] to-[#9e5bff] mt-11 gap-3 border-black border-[2px] w-72 rounded-[25px] flex flex-row p-2 justify-center items-center" type="submit" disabled={(!validUsername || !validPassword)}>LOGIN</button>
            <img src={IU} className="absolute right-[-5vw] bottom-0 w-1/3"></img>
        </form>
    </div>
    )
}



export default Login;