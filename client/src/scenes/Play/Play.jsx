import Carousel from "../../components/Carousel/Carousel.jsx"
import { motion } from "framer-motion";

const Play = () => {
    return (

        <motion.div className="w-full h-full"
            initial={{y: window.innerHeight}}
            animate={{y: 0, transition: {delay: 0.2}}}
            exit={{}}
        >
            <Carousel/>
        </motion.div>
    )
}

export default Play;