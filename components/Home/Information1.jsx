import { WHAT_IS_SPACES_LOUNGE } from "../../content/Website_Info";

const Information = () => {
  return (
    // section
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1536px] relative py-12 px-4 mt-12 gap-4 overflow-hidden">
        {/* Gradient item */}
        <div className="w-[300px] h-[100px] absolute top-[-20%] left:-[10%] min2xl:left-[15%] blur-3xl -z-10 bg-gradient-to-r from-primary to-secondary"></div>
        <h1 className="text-center font-[900] text-2xl lg:text-[5vw] xl:text-4xl">
          What is <span className="text_gradient">SPACESLOUNGE</span>?
        </h1>

        <div className="w-full max-w-[1000px] mx-auto flex flex-wrap gap-6 md:gap-8 lg:gap-12 my-16">
          {WHAT_IS_SPACES_LOUNGE.map((spaceLounge) => {
            return (
              <div
                key={spaceLounge.id}
                className="basis-[300px] flex-grow bg-background_2 dark:bg-[#F6F6F6] p-6 rounded-lg mx-auto flex flex-col items-start shadow-2xl hover:-translate-y-1 duration-200 ease-out">
                <p className="num">{spaceLounge.id}</p>
                <p>{spaceLounge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Information;
