import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import CategoryDropdown from "./Dropdown";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    document.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    });
  }, []);
  return (
    <header className={`shadow `}>
      <div className="py-3 flex justify-between items-center container">
        <Link href="/" className="text-3xl font-semibold text-green-500">
          HeroTech
        </Link>
        <ul
          className={`list-none bg-white lg:flex items-center gap-4 font-medium ${
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
            <Link
              className="inline-flex py-2 px-4 rounded-lg bg-green-600 text-white"
              href="/pc-builder"
            >
              Pc Builder
            </Link>
          </li>
          <li>
            {session?.user?.email ? (
              <button
                onClick={() => signOut()}
                className="py-3 px-5 bg-red-400 rounded-lg text-white border-none"
              >
                Logout
              </button>
            ) : (
              <button
                className="py-3 px-5 rounded-lg bg-blue-600 text-white border-none"
                onClick={() => signIn()}
              >
                ٍSign In
              </button>
            )}
          </li>
          {session?.user && (
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={session.user?.image as string}
              alt="user"
            />
          )}
        </ul>
        <span onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <RiMenu4Fill size={35} />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
