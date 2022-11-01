import Image from "next/image";
import Link from "next/link";
import { MaterialUISwitch } from "../LightAndDark/lightAndDark";

const Navbar = ({ themeToggling, Logo, defaultChecked }) => {
  return (
    <nav>
      <Link href={"/"}>
        <Image className="logo" src={Logo} alt="" />
      </Link>
      <ul>
        <MaterialUISwitch onClick={themeToggling} checked={defaultChecked} />
        <Link href={"/sign-up"}>Sign Up</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
