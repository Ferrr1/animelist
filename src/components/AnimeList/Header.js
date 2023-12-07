import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="py-4 px-6 flex justify-between items-center">
      <h1 className="font-semibold text-2xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md font-medium hover:text-indigo-700 transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
