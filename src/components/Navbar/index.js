import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="bg-gray-900">
      <header className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between py-4 px-6 gap-2">
          <Link href="/" className="font-bold text-white text-2xl">
            ANIME LIST 💢
          </Link>
          <InputSearch />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
