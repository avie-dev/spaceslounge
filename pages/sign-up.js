import { motion as m } from "framer-motion";

const singUp = () => {
  return (
    <m.div className="signup" exit={{ opacity: 0 }}>
      <h1>Sign up</h1>
    </m.div>
  );
};

export default singUp;
