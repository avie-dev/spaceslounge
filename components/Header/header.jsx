import Image from "next/image";
import Button from "../Button/button";
import Triangle from "../Triangle/triangle";

import { motion as m } from "framer-motion";

import Mic from "../../public/Mic.png";
import Headphone from "../../public/headphone.png";

const header = () => {
  const websiteName = "spaces lounge";
  const letter = Array.from(websiteName);

  return (
    <div>
      <m.header exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        {/* <Triangle /> */}
        <div className="container">
          <h1>
            {letter.map((L, i) => {
              return (
                <m.span
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
          <m.p
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.1 }}>
            A place where you can find the upcoming Twitter spaces.
          </m.p>
          <Button path="/sign-up" />

          <Image className="mic" src={Mic} alt="Mic"></Image>
          <Image className="headphone" src={Headphone} alt="Headphone"></Image>
        </div>
      </m.header>
    </div>
  );
};

export default header;
