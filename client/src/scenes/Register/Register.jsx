import "./Register.css"
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/"
import { useNavigate } from "react-router-dom"

import IU from "../../assets/iu.png"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const authBaseURL = import.meta.env.REACT_APP_BACKEND_BASE_URL;

const Register = () => {
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

    const [matchPassword, setMatchPassword] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg("");
    }, [username, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        const v3 = EMAIL_REGEX.test(email);

        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }

        // register user on the backend
        try {
            const response = await fetch(`${authBaseURL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, email })
            })

            if (response.ok) {
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
            }

        } catch (err) {
            if (!err?.message) {
                setErrMsg("No Server Response");
            } else if (err.status === 409) { // make sure to implement this in the backend
                setErrMsg("Username Taken");
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
            return "border-b-[6px] border-[#3727a1] w-1/3 opacity-50 box-border"
        }
    }


    return (
        <div id="Register" className="z-50 flex w-full h-full justify-center items-center flex-col">
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="registerTitle mb-6">REGISTER</div>
            {/* ERROR MESSAGES */}
            <p id="uidnote" className={(usernameFocus && username && !validUsername) ? "formInstructions" : "offscreen"}>
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>
            <p id="emailNote" className={(emailFocus && !validEmail) ? "formInstructions" : "offscreen"}>
                Ur email sucks
            </p>
            <p id="passwordNote" className={(passwordFocus && !validPassword) ? "formInstructions" : "offscreen"}>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
            <p id="confirmNote" className={(matchFocus && !validMatch) ? "formInstructions" : "offscreen"}>
                        Must match the first password input field.
            </p>


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

                <div className={`${getInputClassName(emailFocus)} flex flex-row`}>
                    <label htmlFor="email">Email:</label>
                    <input className="formInput bg-transparent grow" type="text" id="email" name="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={!validEmail}
                        aria-describedby="emailNote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
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

                <div className={`${getInputClassName(matchFocus)} flex flex-row`}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="formInput bg-transparent grow" type="password" id="confirmPassword" name="confirmPassword"
                        autoComplete="off"
                        onChange={(e) => setMatchPassword(e.target.value)}
                        value={matchPassword}
                        required
                        aria-invalid={!validMatch}
                        aria-describedby="confirmNote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                </div>
                <button className="mainButton bg-gradient-to-r from-[#ffc4ec] to-[#9e5bff] mt-11 gap-3 border-black border-[2px] w-72 rounded-[25px] flex flex-row p-2 justify-center items-center" type="submit" disabled={(!validUsername || !validPassword || !validMatch || !validEmail)}>NEXT</button>
                <img src={IU} className="absolute right-[-10rem] bottom-0"></img>
            </form>
        </div>
    )
}

export default Register;