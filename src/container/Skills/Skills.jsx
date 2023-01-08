import React from "react";
// import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { skills } from "./skilller";
import { experiences } from "./experiences";
import "./Skills.scss";

const Skills = () => {
  //######Skiller ve Experiencelarin görüntülenmesi--------
  return (
    // #####--------SKILLS PART -------#######
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={index}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* #-----EXPERIENCES PART------ */}
        <motion.div className="app__skills-exp">
          {experiences.map((item, index) => {
            const { year, works } = item;
            return (
              <div key={index} className="app__skills-exp-item">
                <div className="app__skills-exp-year">
                  <p className="bold-text">{year}</p>
                </div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={works.name}
                >
                  <h4 className="bold-text">{works.name}</h4>
                  <p className="p-text">{works.company}</p>
                </motion.div>

                {/* Ne yaparsam yapayim degistiremedim. Cutomize edemedim. */}
                {/* https://www.syncfusion.com/react-components/react-tooltip ---Bu sitede properties var*/}
                {/*  <Tooltip
                  id={works.name}
                  variant="success"
                  position="TopLeft"
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                ></Tooltip> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(Skills, "skills");
