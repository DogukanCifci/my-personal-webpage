import { AppWrap } from "../../wrapper";
import "./Certification.scss";
const Certification = () => {
  return (
    <div className="wrapper">
      <div className="card">
        {[
          {
            name: "Dogukan Cifci",
            jobTitle: "WEB DEVELOPER",
            description: "aölsdjasmdkaodsmasd",
          },
        ].map((item) => {
          //Destrcuting
          const { name, jobTitle, description } = item;
          return (
            <>
              <div className="item-front">
                <img src="../../assets/uniMichigan.jpg" alt="" />
              </div>
              <div className="item-back">
                <div className="content">
                  <div className="item-title">
                    <h3>{name}</h3>
                    <h4>{jobTitle}</h4>
                  </div>
                  <div className="item-text">
                    <p>{description}</p>
                  </div>

                  <div className="item-social">
                    <ul>
                      <li>Logo1</li>
                      <li>Logo2</li>
                      <li>Logo3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default AppWrap(Certification, "certification");
