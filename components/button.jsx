import Link from "next/link";

const Button = ({ path }) => {
  return (
    <Link
      className="text-white text-sm sm:text-base px-4 py-[.7em] bg-gradient-to-r from-primary to-secondary rounded-[7px] hover:shadow-md active:scale-90 duration-200"
      href={path}>
      Start adding Your Space
    </Link>
  );
};

export default Button;
