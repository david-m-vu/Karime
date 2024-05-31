import "./Landing.css";
import ParticlesCanvas from "../../canvas/ParticlesCanvas";
import NavBar from "../../components/Navbar/Navbar.jsx";
import Button from "../../components/Button/Button.jsx";

const Landing = () => {
    return (
        <div id="Landing" className="w-full h-full relative">
            <NavBar />
            <ParticlesCanvas />
            <Button />
        </div>
    )
}

export default Landing;