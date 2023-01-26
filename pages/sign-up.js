import React from "react";

import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="flex flex-col gap-6">
        <SignInButton path={"/host"} text={"Sign-in as Host"} />
        <SignInButton path={"/speaker"} text={"Sign-in as Speaker"} />
      </section>
    </div>
  );
}

const SignInButton = ({ path, text }) => {
  return (
    <Link href={path} className="flex gap-2 rounded-md px-8 py-3 bg-[#1DA1F2]">
      <AiOutlineTwitter className="text-2xl" />
      <p>{text}</p>
    </Link>
  );
};
