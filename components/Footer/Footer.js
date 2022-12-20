import Link from "next/link";
import React from "react";
import { FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-4 text-center">
      <div className="footer-icons flex justify-evenly w-[200px]  sm:w-[35vw] m-auto text-2xl">
        <a href="#">
          <FaDiscord />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-nav my-4  text-md">
        <Link href={"/"} className="">
          Home
        </Link>
        <Link href={"/projects"} className="ml-3">
          Projects
        </Link>
        <Link href={"/contact"} className="ml-3">
          Contact
        </Link>
      </div>
      <p className="text-sm text-gray-400">
        SPACES LAUNGE &#64; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
