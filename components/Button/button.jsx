import Link from "next/link";

const button = ({ path }) => {
  return (
    <Link className="button" href={path}>
      Start adding Your Space
    </Link>
  );
};

export default button;
