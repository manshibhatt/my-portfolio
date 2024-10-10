import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome
        </motion.span>
        {/* <div className="social">
          <a href="#">
            <img src="/linkdein.png" alt="https://www.linkedin.com/in/manshi-bhatt-65782024b/" />
          </a>
          <a href="#">
            <img src="/github.png" alt="https://github.com/manshibhatt" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
