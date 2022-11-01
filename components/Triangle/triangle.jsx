import { motion as m } from "framer-motion";

const Triangle = () => {
  return (
    <m.div className="triangle" animate={{ opacity: [0, 1] }}>
      <div className="upper_shape"></div>
      <div className="down_shape"></div>
    </m.div>
  );
};

export default Triangle;
