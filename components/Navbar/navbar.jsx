import Image from "next/image";
import Link from "next/link";
import { MaterialUISwitch } from "../Light and Dark/lightAndDark";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { useState } from "react";

import "./app";

const Navbar = ({ themeToggling, Logo, checked }) => {
  const [navIcons, setNavIcons] = useState(<RiMenu3Line />);
  const [navToggle, setNavToggle] = useState("false");

  const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<RiCloseLine />);
  };
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<RiMenu3Line />);
  };

  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  return (
    <nav>
      <Link href={"/"}>
        <Image className="logo" src={Logo} alt="" />
      </Link>
      <ul data-nav-toggle={navToggle}>
        <MaterialUISwitch onClick={themeToggling} defaultChecked={checked} />
        <Link className="navLink" href={"/contributors"}>
          Contributors
        </Link>
        <Link className="navLink" href={"/"}>
          Sign In
        </Link>
        <Link className="navLink active" href={"/sign-up"}>
          Sign Up
        </Link>
      </ul>
      <div className="openAndClose" onClick={navTogglingFunction}>
        {navIcons}
      </div>
    </nav>
  );
};

export default Navbar;
