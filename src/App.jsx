import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./lib/Particles.js";
import Landing from "./scenes/Landing/Landing.jsx";
import Play from "./scenes/Play/Play.jsx";
import Browse from "./scenes/Browse/Browse.jsx";
import My_Album from "./scenes/My_Album/My_Album.jsx";
import NavBar from "./components/Navbar/Navbar.jsx"
import "./App.css";

function App() {
    useEffect(() => {

    }, []);

    const location = useLocation();

    return (
        <div id="App" className="w-full h-full">
            <NavBar />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/my_album" element={<My_Album />} />
                    <Route path="/browse" element={<Browse />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
