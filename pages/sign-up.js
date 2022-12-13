import { motion } from "framer-motion";

const singUp = () => {
  return (
    <motion.div className="signup" exit={{ opacity: 0 }}>
      <h1>Sign up</h1>
    </motion.div>
  );
};

export default singUp;
