import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
// import LogoLight from "../../public/LogoLight.svg";
import Logo from "../../public/Header img.png";

const Footer = () => {
  // const bgcolor= "#DADADA"
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-[#121B24] dark:bg-[#DADADA] min-h-[200px]">
      <div className="w-[90%] mx-auto flex pt-10">
        <Link href={"/"}>
          <Image className="w-[117px]" src={Logo} alt="" />
        </Link>
        <ul className="ml-[24%] lg:ml-[320px] text-[14px] md:text-[18px]  font-medium text-[#FFFFFF73] dark:text-[#00000073] space-y-2 self-center">
          <li className="text-[18px] md:text-[24px] text-[#FFFFFF] dark:text-[#000000]">
            Page
          </li>
          <li>
            <Link href={"#"}>Contributors</Link>
          </li>
          <li>
            <Link href="/host">Host</Link>
          </li>
          <li>
            <Link href="/speaker">Speaker</Link>
          </li>
        </ul>
      </div>
      <div className=" absolute bottom-8 right-10 flex space-x-6">
        <Link href=" https://github.com/avie-dev/spaceslounge">
          <FaGithub size={30} className=" dark:text-[#00000073]" />
        </Link>
        <Link href="https://discord.gg/4ccommunity">
          <FaDiscord size={30} className=" dark:text-[#00000073]" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
