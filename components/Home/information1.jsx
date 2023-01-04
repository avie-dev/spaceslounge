import { WHAT_IS_SPACES_LOUNGE } from "../../content/Website_Info";

const Information = () => {
  return (
    // section
    <div className="flex flex-col items-center">
      <div className="relative py-12 px-4 mt-12 grid grid-cols-2 gap-4 md:grid-cols-1 overflow-hidden min2xl:max-w-[1536px]">
        {/* Gradient item */}
        <div className="w-[300px] h-[100px] absolute top-[-20%] left:-[10%] min2xl:left-[15%] blur-3xl -z-10 bg-gradient-to-r from-primary to-secondary"></div>
        {/* Title of this section */}
        <h1 className="text-center text-4xl font-[900] lg:text-[5vw] md:text-2xl">
          What is <span className="text_gradient">SPACESLOUNGE</span>?
        </h1>
        {/* Information about this website */}
      </div>
    </div>
  );
};

export default Information;
