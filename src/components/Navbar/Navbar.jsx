import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.dogukan_logo} alt="" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "certification", "work", "skills", "contact"].map(
          (item) => {
            return (
              <li key={`link-${item}`} className="app__flex p-text">
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          }
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="menu-bar" />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX className="exit" onClick={() => setToggle(false)} />
            <ul className="app__navbar-links right-menu">
              {[
                "home",
                "about",
                "certification",
                "work",
                "skills",
                "contact",
              ].map((item) => {
                return (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
