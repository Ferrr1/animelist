"use client";

import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        placeholder="Cari Anime"
        className="w-full p-2 rounded-md"
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1.5 right-1" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default InputSearch;
