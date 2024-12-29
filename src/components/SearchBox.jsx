"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);

  };
  return (
    <form className="justify-between px-5 flex max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="text-orange-600 disabled:text-gray-400" disabled={search === ''}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
