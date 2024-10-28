"use client";

import Link from "next/link";

// FROM REACT JS
import React, { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("menu");

  const setMenuNavlist = () => {
    setMenu("setMenu");

    if (document.getElementById("menu")) {
      return setMenu("setMenu");
    } else {
      return setMenu("menu");
    }
  };

  return (
    <>
      <nav className="flex justify-around items-center h-12vh bg-white">
        <header>
          <h1 className="text-3xl font-semibold">Project</h1>
        </header>

        <div
          className="burger-menu cursor-pointer p-4 hidden max-sm:block"
          onClick={setMenuNavlist}
        >
          <div className="line w-8 h-1 bg-black m-1 rounded-md"></div>
          <div className="line w-8 h-1 bg-black m-1 rounded-md"></div>
          <div className="line w-8 h-1 bg-black m-1 rounded-md"></div>
        </div>

        <ul id={menu} className="navlist flex">
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">Home</li>
          </Link>
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">Project</li>
          </Link>
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">Services</li>
          </Link>
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">About Us</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
