import { whatIsSpacesLounge } from "../content/websiteInfoData";

const Information = () => {
  return (
    // section
    <div className="relative py-12 px-4 mt-12 grid grid-cols-2 gap-4 md:grid-cols-1 overflow-hidden min2xl:max-w-[1536px]">
      {/* Gradient item */}
      <div className="w-[300px] h-[100px] absolute top-[-20%] left:-[10%] min2xl:left-[15%] blur-3xl -z-10 bg-gradient-to-r from-primary to-secondary"></div>
      {/* Title of this section */}
      <h1 className="text-4xl font-[900] lg:text-[5vw] md:text-2xl">
        What is <span className="text_gradient">SPACESLOUNGE</span>?
      </h1>
      {/* Information about this website */}
      <div className="descriptions">
        {whatIsSpacesLounge.map((description, i) => {
          return (
            // Each Information
            <div
              key={i}
              className="grid grid-cols-3 p-4 rounded-2xl border-2 border-transparent duration-100 lg:grid-cols-1 hover:bg-[#81818124] hover:border-2 hover:border-[#7f7f7f]">
              <h2 className="text-xl md:text-lg"> {description.title} </h2>
              <p className="col-span-2 md:text-sm">
                {" "}
                {description.description}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
