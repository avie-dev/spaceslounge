import { WHAT_IS_SPACES_LOUNGE } from "../content/Website_Info";

const Information = () => {
  return (
    // section
    <div className="flex flex-col items-center">
      <div className="relative py-12 px-4 mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 overflow-hidden 2xl:max-w-[1536px]">
        {/* Gradient item */}
        <div className="w-[300px] h-[100px] absolute top-[-20%] left:-[10%] min2xl:left-[15%] blur-3xl -z-10 bg-gradient-to-r from-primary to-secondary"></div>
        {/* Title of this section */}
        <h1 className="font-[900] text-2xl lg:text-[5vw] xl:text-4xl">
          What is <span className="text_gradient">SPACESLOUNGE</span>?
        </h1>
        {/* Information about this website */}
        <div className="descriptions">
          {WHAT_IS_SPACES_LOUNGE.map((description, i) => {
            return (
              // Each Information
              <div
                key={i}
                className="grid grid-cols-1 p-4 rounded-2xl border-2 border-transparent duration-100 lg:grid-cols-3 hover:bg-[#81818124] hover:border-2 hover:border-[#7f7f7f]">
                <h2 className="text-xl md:text-lg"> {description.title} </h2>
                <p className="col-span-2 text-sm md:text-base">
                  {description.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Information;
