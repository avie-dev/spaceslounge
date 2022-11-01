import Link from "next/link";

const Button = ({ path }) => {
  return (
    <Link className="button" href={path}>
      Start adding Your Space
    </Link>
  );
};

export default Button;
