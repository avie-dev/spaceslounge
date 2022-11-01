import { motion as m } from "framer-motion";

const triangle = () => {
  return (
    <m.div className="triangle" animate={{ opacity: [0, 1] }}>
      <div className="upper_shape"></div>
      <div className="down_shape"></div>
    </m.div>
  );
};

export default triangle;
