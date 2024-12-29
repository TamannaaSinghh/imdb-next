"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const NavbarItemContent = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`hover:text-amber-600 font-semibold ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
};

const NavbarItem = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItemContent {...props} />
    </Suspense>
  );
};

export default NavbarItem;
