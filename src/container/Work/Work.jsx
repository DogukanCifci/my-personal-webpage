import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { projects } from "./projects";
import { AppWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredData, setFilteredData] = useState(projects);

  //Filtre isleminden gecirme fonksiyonu.
  //# My Creative Portfolio Kismindaki butonlara basildiginda filtrelemesi icin..

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setFilteredData(
      projects.filter(
        (project) => project.tag.toLowerCase() === item.toLowerCase()
      )
    );
    if (item === "All") {
      setFilteredData(projects);
    }

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio </span> Section
      </h2>

      <div className="app__work-filter">
        {["HTML-CSS", "Javascript", "React JS", "Django", "All"].map(
          (item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            );
          }
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filteredData.map((item, index) => {
          const { title, tag, url, project_link, code_link, description } =
            item;
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={url} alt={url} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={project_link} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={code_link} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{tag}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};
export default AppWrap(Work, "work");

// If i want to try without map i have to write one by one
/* <div className="app__work-item app__flex">
          <div className="app__work-img app__flex">
            <img src={images.about02} alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href="#projelinki" target="_blank">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="#projelinki" target="_blank">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">Title</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              Description
            </p>

            <div className="app__work-tag app__flex">
              <p className="p-text">TAGS</p>
            </div>
          </div>
        </div>

        {/* 2.Proje */

/*  <div className="app__work-item app__flex">
          <div className="app__work-img app__flex">
            <img src={images.about02} alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href="#projelinki" target="_blank">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="#projelinki" target="_blank">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">Title</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              Description
            </p>

            <div className="app__work-tag app__flex">
              <p className="p-text">TAGS</p>
            </div>
          </div>
        </div> */
