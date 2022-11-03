import { whatIsSpacesLounge } from "./data";

const Information = () => {
  return (
    <div className="information">
      <h1>
        What is <span className="text_gradient">SPACESLOUNGE</span>?
      </h1>
      <div className="descriptions">
        {whatIsSpacesLounge.map((description, i) => {
          return (
            <div key={i} className="description_1">
              <h2> {description.title} </h2>
              <p> {description.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
