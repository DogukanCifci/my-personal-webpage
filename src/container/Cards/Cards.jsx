import "../Certification/Certification.scss";

export const Cards = ({ item }) => {
  //Destrcuting
  const { company, title, skills, url } = item;
  return (
    <>
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
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
