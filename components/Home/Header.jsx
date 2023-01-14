import React from "react";
import Image from "next/image";
import Button from "../Button";

import HeaderIMG from "../../public/Header.png";

const Header = () => {
  return (
    <div className="flex justify-center bg-[#0f171f] dark:bg-[#e4e4e4]">
      <div className="w-full max-w-[1536px] grid gap-4 lg:grid-cols-2 items-center mt-24 lg:mt-0 lg:h-screen 2xl:h-auto 2xl:py-24">
        <div className="flex flex-col items-start gap-3 px-4 md:px-12 lg:px-24">
          <h1 className="text_gradient text-5xl md:text-6xl py-2">
            Spaces Lounge
          </h1>
          <p className="text-base md:text-xl">
            Connecting you with the right twitter spaces. Discover, join,
            co-host and even become a speaker on spaces by your favorite
            creators
          </p>
          <Button path={"/sign-up"} />
        </div>
        <div className="relative">
          <Image src={HeaderIMG} width="100%" alt="Header IMG" />
        </div>
      </div>
    </div>
  );
};

export default Header;
