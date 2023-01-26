import React from "react";
import Image from "next/image";

import UserImage from "../../public/user.png";

export default function Details({ hostSpaces }) {
  return (
    <div
      id="responsive-grid"
      className="grid grid-cols-3 md:grid-cols-5 text-center items-center py-4 text-sm  border-b-2 border-white border-opacity-5 hover:bg-[#273341] dark:hover:bg-[#e0e0e0]">
      <p className="hidden md:block">{hostSpaces.date}</p>
      <p className="hidden md:block">{hostSpaces.runtime} Hour</p>
      <p>{hostSpaces.title}</p>
      <div className="flex justify-center">
        {hostSpaces.speakers.map((speaker) => {
          return (
            <Image
              key={speaker}
              width={19}
              height={19}
              src={UserImage}
              alt={`${speaker}'s Image`}
            />
          );
        })}
      </div>
      <button className="bg-secondary text-white block mx-auto px-4 py-2 rounded-md">
        Go to Space
      </button>
    </div>
  );
}
