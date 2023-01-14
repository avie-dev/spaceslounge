import React from "react";
import Image from "next/image";

import { WHY_SPACES_LOUNGE } from "../../content/Website_Info";

const WhySpacesLounge = () => {
  return (
    <div className="py-8 flex justify-center">
      <div className="w-full max-w-[1536px]">
        <h1 className="text-center text-4xl text-secondary">
          Why Spaces Lounge?
        </h1>
        <div className="px-4 md:px-12 lg:px-24 mt-24 flex flex-col gap-24 lg:gap-48">
          {WHY_SPACES_LOUNGE.map((data) => {
            return <EachSection data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WhySpacesLounge;

function EachSection({ data }) {
  return (
    <div
      className={`flex flex-wrap items-start gap-8 ${
        data.isImgSecond == false && "flex-row-reverse"
      }`}>
      <div className="flex flex-col lg:basis-[50%] gap-2">
        <h2 className="text-xs font-medium lg:font-bold md:text-base">
          {data.title1}
        </h2>
        <h2 className="text-3xl lg:text-4xl text_gradient font-bold">
          {data.title2}
        </h2>
        <p className="text-base md:text-xl">{data.description}</p>
      </div>
      <Image
        src={data.img}
        className="mx-auto"
        alt={`Why-spaces-lounge IMG${data.id}`}
      />
    </div>
  );
}
