import { useRef } from "react";
import "./achievements.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Achievements = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on 
          <br /> growing
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Hard</motion.b> Work
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>And Continuous</motion.b> Efforts.
          </h1>
          {/* <button>WHAT I ACHIEVED?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Leetcode</h2>
          <p>
            Solved 500+ problems on Leetcode
                      Achieved Knight Badge awarded to top 25% participants 
          </p>
          {/* <button >Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Code Gladiators</h2>
          <p>
            Made to the finals of TechGig Code Gladiator
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HardWar 3.0</h2>
          <p>
            Participated in Hardwar hackathon and
             developed a car parking system with Arduino 
             and applied open cv for image detection
             and integrated payment gateway
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Others</h2>
          <p>
            Secured 2nd position in college code competition
            Secured 97.40 in Class 12th
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
