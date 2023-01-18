import Link from "next/link";

const Button = ({ path }) => {
  return (
    <Link
      className="inline-block text-white text-sm sm:text-base px-4 py-[.7em] bg-gradient-to-r from-primary to-secondary rounded-[7px] hover:shadow-md active:scale-90 duration-200"
      href={path}>
      Get Started
    </Link>
  );
};

export default Button;
