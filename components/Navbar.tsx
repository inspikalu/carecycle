"use client";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-full flex items-center justify-between px-2 py-3 border-b">
      <Link href={"/"} className="flex items-center justify-start">
        <div className="relative w-[3rem] h-[3rem] overflow-hidden">
          <Image
            src={"/logo.png"}
            alt="Logo"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-bold text-2xl">CareCycle</span>
      </Link>
      <div className="flex items-center gap-2">
        {path && (path !== "/signup" && path !== "/login") && (
          <div className="flex items-center bg-lightGrey p-2 rounded-md focus-within:outline focus-within:outline-blue">
            <CiSearch size={"25"} />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="bg-lightGrey focus:outline-none"
            />
          </div>
        )}
        <Link
          href={"/signup"}
          className="py-2 px-2 rounded-full shadow-sm bg-teal text-white"
        >
          Sign Up
        </Link>
        <Link
          href={"/login"}
          className="py-2 px-2 rounded-full shadow-sm bg-lightGrey"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
