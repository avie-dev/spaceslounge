import Image from "next/image";

import UserImage from "../../public/user.png";
import {
  AiFillMessage,
  AiOutlineShareAlt,
  AiFillTwitterSquare,
  AiFillDelete,
} from "react-icons/ai";

export default function Scheduled_Twitter({ twitterSpaces }) {
  return (
    <div className="bg-[#283542] dark:bg-[#d5d5d5] p-2 rounded-md">
      <div className="flex items-start mb-4">
        {/* Information */}
        <div className="text-xs">
          <h2 className="mb-2 font-bold">{twitterSpaces.title}</h2>
          <p>DATE: {twitterSpaces.date}</p>
          <p>TIME: {twitterSpaces.time_zone}</p>
        </div>
        {/* Host Image */}
        <Image
          width={40}
          height={40}
          src={UserImage}
          alt=""
          className="block mx-auto"
        />
      </div>
      {/* Icons */}
      <div className="flex justify-evenly text-xl">
        <AiFillMessage />
        <AiOutlineShareAlt />
        <AiFillTwitterSquare />
        <AiFillDelete className="text-red-500" />
      </div>
    </div>
  );
}
