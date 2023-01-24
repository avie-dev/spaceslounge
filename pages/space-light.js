import React from "react";

import data from "../content/spaces.json";
import mic from "../public/micLogo.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
export default function SpaceLight() {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center mt-24">
      <div className="w-full lg:w-3/4 lg:min-w-[850px] h-auto flex items-center justify-center gap-16 mb-10">
        <div className="py-3 px-8 bg-secondary rounded-md text-xl flex items-center gap-1 font-bold">
          Filter <IoIosArrowDown size={22} />
        </div>
        <div className="w-[85%] md:w-[70%] flex justify-center items-center">
          <input
            type="text"
            placeholder=""
            name="filter"
            className="flex-1 h-14 text-xl bg-[#1E2E3E] border border-[#2F3F50] rounded-l-md"
          />
          <div className="box-border h-14 py-3 px-8 font-bold bg-primary rounded-r-md text-xl">
            Search
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/5 h-auto flex flex-col justify-start items-center md:rounded-lg overflow-hidden bg-background_2 divide-y-2 divide-slate-500 mt-5">
        {data.map((space, index) => {
          return <SpaceRow key={index} data={space} />;
        })}
      </div>
    </div>
  );
}

function SpaceRow({ data }) {
  const { speaker, title, img, twitter, schedule, attendees, category, link } =
    data;
  return (
    <div className="w-full flex justify-between items-center gap-2 py-3 pr-7 pl-3">
      <div className="h-full w-1/4 md:1/5 flex flex-col items-center md:flex-row justify-around gap-2 mr-2">
        <img
          src={img}
          alt="user"
          className="w-14 h-14 rounded-full border-2 border-white"
        />
        <div className="h-1/2 md:h-full w-full md:w-1/4 flex flex-col justify-evenly items-center py-2">
          <div className="text-white text-base md:text-lg">{speaker}</div>
          <div className="text-slate-300 text-base md:text-lg">@{twitter}</div>
        </div>
      </div>

      <div className="h-full flex-1 flex flex-col justify-evenly items-center py-2">
        <div className="text-white text-xl md:text-2xl">{title}</div>
        <div className="text-slate-300 text-sm md:text-base">{`${schedule} - ${attendees} attendees`}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-end gap-3 w-1/4 md:w-2/5 h-full">
        <div className="flex justify-center items-center bg-primary py-4 md:py-2 px-2 w-full md:w-1/2 max-w-[175px] rounded-md font-bold text-sm md:text-base lg:text-xl uppercase overflow-ellipsis">
          {category}
        </div>
        <div className="bg-[#7366D7] flex justify-center items-center py-4 md:py-2 px-2 w-full md:w-1/2 max-w-[175px] rounded-md font-semibold text-center text-sm md:text-base lg:text-xl uppercase">
          <Image src={mic} alt="mic" className="h-4/5 md:h-full" />
          {"join space"}
        </div>
      </div>
    </div>
  );
}
