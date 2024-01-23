import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Arlly Cavalcanti
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="ícone do Facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="ícone do Instagram" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="ícone do Youtube" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="ícone do Dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
