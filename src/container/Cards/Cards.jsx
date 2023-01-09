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
            <h3>{company}</h3>
            <h4>{title}</h4>
          </div>
          <div className="item-text">
            <p>{skills}</p>
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
};
