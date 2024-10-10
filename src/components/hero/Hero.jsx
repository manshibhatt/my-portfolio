import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {

  const handleLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/manshi-bhatt-65782024b"; // Replace with your GitHub URL
};

const handleGit = () => {
  window.location.href = "https://github.com/manshibhatt"; // Replace with your GitHub URL
};

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>MANSHI BHATT</motion.h1> 
          <motion.h2 variants={textVariants}>
            Web developer and Problem Solver
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={handleLinkedIn}>
              LinkedIn
            </motion.button>
            <motion.button variants={textVariants} onClick={handleGit} >GitHub</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Programmer
      </motion.div>
      <div className="imageContainer">
        {/* <img src="/new.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
