import "../Certification/Certification.scss";

export const Cards = ({ item }) => {
  //Destrcuting
  const { title, skills, url, sertifikaUrl } = item;
  return (
    <a className="card" href={sertifikaUrl} rel="noreferrer" target="_blank">
      <div className="item-front">
        <img src={url} alt="" />
      </div>
      <div className="item-back">
        <div className="content">
          <div className="item-title">
            <h4>{title}</h4>
          </div>
          <div className="item-text">
            <ul>
              {skills.map((skill, index) => {
                return (
                  <li style={{ color: "black" }} key={index}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};
