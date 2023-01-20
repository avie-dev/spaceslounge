import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "next-themes";

import LogoLight from "../../public/LogoLight.svg";
import LogoDark from "../../public/LogoDark.svg";

import "./app";
import { useEffect } from "react";

const Navbar = () => {
  const [logo, setLogo] = useState(LogoDark);
  const [navIcons, setNavIcons] = useState(<RiMenu3Line />);
  const [navToggle, setNavToggle] = useState("false");
  const { theme, setTheme } = useTheme();
  const [themeLogo, setThemeLogo] = useState(<FaSun />);

  // Open Navbar Links > 768px
  const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<RiCloseLine />);
  };
  // Close Navbar Links > 768px
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<RiMenu3Line />);
  };
  // Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  useEffect(() => {
    if (theme == "light") {
      document.documentElement.classList.add("dark");
      setLogo(LogoLight);
      setThemeLogo(<FaSun />);
    } else {
      document.documentElement.classList.remove("dark");
      setLogo(LogoDark);
      setThemeLogo(<FaMoon />);
    }
  }, [theme]);

  return (
    <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 px-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image className="w-[150px] sm:w-[200px]" src={logo} alt="" />
      </Link>
      {/* Nav Links */}
      <ul data-nav-toggle={navToggle} className="animation">
        <button
          aria-label="theme toggle"
          className="bg-slate-600 p-2 mr-0 md:mr-4 border-2 border-transparent rounded-lg dark:bg-slate-200 self-center focus:border-slate-100 dark:focus:border-slate-700 duration-200"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {themeLogo}
        </button>
        <Link
          className="py-2 px-4 rounded-lg my-2 md:my-0 md:mr-4 mb-2 md:mb-0 duration-200 nav-link-animation"
          href={"/contributors"}>
          Contributors
        </Link>
        <Link
          className="py-2 px-4 bg-[#0078c2] text-white rounded-lg hover:bg-[#0078a2] duration-200 nav-link-animation"
          href={"/sign-up"}>
          Sign In
        </Link>
      </ul>
      {/* icons for toggling */}
      <div className="block md:hidden text-2xl" onClick={navTogglingFunction}>
        {navIcons}
      </div>
    </nav>
  );
};

export default Navbar;
