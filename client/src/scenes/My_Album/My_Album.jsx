import { motion } from "framer-motion";

const My_Album = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        </motion.div>
    )
}

export default My_Album;