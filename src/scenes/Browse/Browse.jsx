import { motion } from "framer-motion";

const Browse = () => {
    return (
        <motion.div id="Browse"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        </motion.div>
    )
}

export default Browse;