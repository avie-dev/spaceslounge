import { motion as m } from "framer-motion";

const notFound = () => {
  return (
    <m.div exit={{ opacity: 0 }} className="overflow-hidden">
      <h1 className="bg-red-700">Page not found</h1>
    </m.div>
  );
};

export default notFound;
