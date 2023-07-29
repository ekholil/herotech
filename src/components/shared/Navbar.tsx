import { inter } from "@/pages";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import CategoryDropdown from "./Dropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    });
  }, []);
  return (
    <header className={`shadow  ${inter.className}`}>
      <div className="py-3 flex justify-between items-center container">
        <Link href="/" className="text-3xl font-semibold text-green-500">
          HeroTech
        </Link>
        <ul
          className={`list-none bg-white lg:flex gap-4 font-medium ${
            menuOpen
              ? "absolute p-3 top-[50px] left-0 right-0 flex flex-col"
              : "hidden"
          } `}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <CategoryDropdown />
          <li>
            <Link href="/">Pc Builder</Link>
          </li>
          <li>
            <Link href="/">ٍSign In</Link>
          </li>
        </ul>
        <span onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <RiMenu4Fill size={35} />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
