import Image from "next/image";

import UserImage from "../../public/user.png";

const User = () => {
  return (
    <div className="bg-[#2F3F50] dark:bg-[#F0F0F0] flex flex-col items-center p-6 rounded-lg border-2 border-white border-opacity-30 shadow-xl lg:hidden">
      <Image src={UserImage} alt="" className="w-[119px] mb-2" />
      <h2 className="text-2xl font-medium">User's Name</h2>
      <p className="text-opacity-[.6]">User's Job</p>
    </div>
  );
};

export default User;
