import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";
const abouts = [
  {
    title: "Web Development",
    imgUrl: images.about01,
  },
  {
    title: "Frontend Development",
    imgUrl: images.about02,
  },
  {
    title: "Backend",
    imgUrl: images.about04,
  },
  {
    title: "Certificates",
    imgUrl: images.about03,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Development </span>
        <br />
        means
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default AppWrap(About, "about");
