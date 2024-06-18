import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import "./lib/Particles.js";
import Landing from "./scenes/Landing/Landing.jsx";
import Login from "./scenes/Login/Login.jsx";
import Register from "./scenes/Register/Register.jsx";
import Play from "./scenes/Play/Play.jsx";
import Browse from "./scenes/Browse/Browse.jsx";
import My_Album from "./scenes/My_Album/My_Album.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import "./App.css";

const App = () => {
    const token = useSelector((state) => state.token);
    const user = useSelector((state) => state.user);
    const isAuth = Boolean(token);
    
    useEffect(() => {
        console.log(isAuth);
    }, []);

    const location = useLocation();

    return (
        <div id="App" className="w-full h-full">
            <NavBar isAuth={isAuth}/>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Landing isAuth={isAuth}/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/play" element={<Play />} />
                    <Route path="/my_album" element={<My_Album />} />
                    <Route path="/browse" element={<Browse />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;

