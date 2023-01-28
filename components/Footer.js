import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";

import Logo from "../public/Header img.png";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-[#121B24] dark:bg-[#DADADA] flex flex-wrap gap-8 md:gap-32 lg:gap-64 p-8">
      <Link href={"/"}>
        <Image
          className="w-[80px] md:w-[100px]"
          src={Logo}
          alt="Footer Logo Image"
        />
      </Link>
      <ul className="text-[14px] md:text-[18px] font-medium text-[#FFFFFF73] dark:text-[#00000073]">
        <li className="text-[18px] md:text-[24px] text-[#FFFFFF] dark:text-[#000000]">
          <Link href={"/"}>Page</Link>
        </li>
        <li>
          <Link href={"/contributors"}>Contributors</Link>
        </li>
        <li>
          <Link href="/host">Host</Link>
        </li>
        <li>
          <Link href="/speaker">Speaker</Link>
        </li>
      </ul>
      <div className="flex gap-4 ml-auto self-end">
        <Link href="https://github.com/avie-dev/spaceslounge">
          <FaGithub size={30} className=" dark:text-[#00000073]" />
        </Link>
        <Link href="https://discord.gg/4ccommunity">
          <FaDiscord size={30} className=" dark:text-[#00000073]" />
        </Link>
      </div>
    </footer>
  );
}
