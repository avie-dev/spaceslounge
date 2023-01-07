import Image from "next/image";
import Button from "../button";

import { motion as m } from "framer-motion";

import Mic from "../../public/Mic.png";
import Headphone from "../../public/headphone.png";
import HeaderLogo from "../../public/Header img.png";

const header = () => {
  const websiteName = "spaces lounge";
  const letter = Array.from(websiteName);

  return (
    // Header Element
    <m.header className="overflow-hidden relative">
      <div className="flex flex-col items-center justify-center text-center h-screen 2xl:h-auto 2xl:py-[10em]">
        {/* Logo header image */}
        <m.div
          className="relative opacity-0"
          animate={{ opacity: [0, 1], y: [10, 0] }}>
          <Image
            className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] mb-4 sm:mb-0"
            src={HeaderLogo}
            alt="Header Logo"></Image>
          {/* Background Gradient for the logo */}
          <m.div className="w-[100px] h-[100px] bg-gradient-to-r from-primary to-secondary absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 blur-3xl -z-[1]"></m.div>
        </m.div>

        {/* h1 tag */}
        <h1 className=" text-primary font-[900] uppercase text-[32px] lg:text-[8vw] xl:text-[108px] leading-[1.1]">
          {letter.map((L, i) => {
            return (
              <m.span
                className={`${i == 5 ? "mr-4 sm:mr-2" : ""} inline-block`}
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, scale: [1.3, 1] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  type: "spring",
                }}>
                {" "}
                {L}{" "}
              </m.span>
            );
          })}
        </h1>

        {/* short information about Website */}
        <m.p
          className="my-2 mb-6 opacity-0 px-4 lg:px-[10%] text-base lg:text-[3vw] xl:text-[36px]"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.1 }}>
          A place where you can find the upcoming Twitter spaces.
        </m.p>
        <Button path="/sign-up" />

        {/* Two images for the background -- Mic & Headphone */}
        <Image
          className="absolute left-[5%] sm:top-[10%] w-[300px] h-[300px] md:w-auto md:h-auto animate-pulse -z-10"
          src={Mic}
          alt="Mic"></Image>
        <Image
          className="absolute w-[150px] h-[150px] opacity-[.7] sm:opacity-100 lg:w-[auto] lg:h-[auto] right-[10%] bottom-[10%] -z-[1]"
          src={Headphone}
          alt="Headphone"></Image>
      </div>
    </m.header>
  );
};

export default header;
