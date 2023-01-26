import React from "react";
import Image from "next/image";

export default function Information({ data }) {
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
        <h2 className="text-3xl lg:text-4xl text_gradient font-bold">
          {data.title}
        </h2>
        <p className="text-base md:text-xl">{data.description}</p>
      </div>
      <Image
        src={data.img}
        className="mx-auto w-full max-w-[400px]"
        alt={`Why-spaces-lounge IMG${data.id}`}
      />
    </div>
  );
}
