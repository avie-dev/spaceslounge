import Image from "next/image";

import UserImage from "../../public/user.png";

export default function User() {
  return (
    <div className="bg-[#2F3F50] dark:bg-[#F0F0F0] hidden lg:flex flex-col items-center p-6 rounded-lg border-2 border-white border-opacity-30 shadow-xl">
      <Image src={UserImage} alt="" className="w-[119px] mb-2" />
      <h2 className="text-2xl font-medium">User's Name</h2>
      <p className="text-opacity-[.6]">User's Job</p>
    </div>
  );
}
