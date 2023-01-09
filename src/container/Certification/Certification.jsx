import { AppWrap } from "../../wrapper";
import { Cards } from "../Cards/Cards";
import "./Certification.scss";
import { sertifikalar } from "./sertifikalar";
const Certification = () => {
  return (
    <div className="wrapper">
      {sertifikalar.map((item, index) => {
        return (
          <div className="card" key={index}>
            <Cards item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default AppWrap(Certification, "certification");
