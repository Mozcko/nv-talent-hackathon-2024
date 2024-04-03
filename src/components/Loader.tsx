import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{
          rotate: 360,
        }}
        transition={{
          loop: Infinity,
          duration: 0.5,
          ease: "linear",
        }}
      ></motion.div>
    </div>
  );
};

export default Loader;
