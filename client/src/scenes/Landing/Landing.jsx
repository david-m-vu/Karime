import "./Landing.css";
import ParticlesCanvas from "../../canvas/ParticlesCanvas";
import Button from "../../components/Button/Button.jsx";
import { motion } from "framer-motion";

const Landing = () => {
    return (
        <motion.div id="Landing" className="w-full h-full relative"
        initial={{}}
        animate={{height: "100%"}}
        exit={{y: -window.innerHeight, transition: {duration: 0.2}}}
        >
            <ParticlesCanvas />
            <Button />
        </motion.div>
    )
}

export default Landing;