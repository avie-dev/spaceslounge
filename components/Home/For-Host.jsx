import React from "react";

import Information from "./Information";

import { HOST } from "../../content/Website_Info";

export default function ForHost() {
  return (
    <div className="py-8 flex justify-center">
      <div className="w-full max-w-[1536px]">
        <h1 className="text-center text-3xl text-secondary">For Host</h1>
        <div className="px-4 md:px-12 lg:px-24 mt-24 flex flex-col gap-24 lg:gap-48">
          {HOST.map((data) => {
            return <Information data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
