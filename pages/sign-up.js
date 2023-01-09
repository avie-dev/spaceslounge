import Link from "next/link";
import { motion as m } from "framer-motion";
import { AiOutlineTwitter } from "react-icons/ai";

const signUp = () => {
  return (
    <m.div
      className="signup h-screen flex justify-center items-center"
      exit={{ opacity: 0 }}>
      <section className="flex-col flex gap-6">
        <Link href="/host">
          <button
            type="button"
            className="rounded-md px-8 py-3 flex gap-2 bg-[#1DA1F2]">
            <AiOutlineTwitter className="h-6 w-6" />
            <div>Sign-in as Host</div>
          </button>
        </Link>
        <Link href="/host">
          <button
            type="button"
            className="rounded-md px-5 py-3 flex gap-2 bg-[#1DA1F2]">
            <AiOutlineTwitter className="h-6 w-6" />
            <div>Sign-in as Speaker</div>
          </button>
        </Link>
      </section>
    </m.div>
  );
};

export default signUp;
