import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import wave from "../public/wave.svg";

export default function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center flex-col relative">
      <section className="flex flex-col gap-6 absolute">
        <SignInButton path={"/host"} text={"Sign-in as Host"} />
        <SignInButton path={"/speaker"} text={"Sign-in as Speaker"} />
      </section>
      <Image src={wave} alt="" className="w-full mt-auto" />
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
