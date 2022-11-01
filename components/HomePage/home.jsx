import Button from "../Button/button";
import Triangle from "../Triangle/triangle";
import Information from "../WebsiteInformation/WhatIsSpaceslounge/information";

import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <div>
      <m.header exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <Triangle />
        <div className="container">
          <m.h1
            className="text_gradient"
            animate={{ y: [100, -10, 0], scale: [1, 1.2, 1], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            spaces lounge
          </m.h1>
          <m.p
            animate={{ y: [100, -10, 0], scale: [1, 1.2, 1], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
          </m.p>
          <Button path="/sign-up" />
        </div>
      </m.header>

      <Information />
    </div>
  );
};

export default Home;
