"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 bg-transparent">
      <nav className="max-w-6xl mx-auto flex justify-between items-center text-xl p-5 text-muted-foreground relative">
        <h1 className="text-slate-300 uppercase tracking-widest font-semibold cursor-pointer hover:text-yellow-500">
          <Link href="/">animesh mondal</Link>
        </h1>
        <div className="hidden md:flex gap-5 tracking-wider font-semibold">
          <Link
            className="text-slate-300 hover:text-yellow-500"
            href="/projects"
          >
            Projects
          </Link>
          <Link className="text-slate-300 hover:text-yellow-500" href="/blog">
            Blog
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/70 text-center py-5">
          <Link
            className="block text-slate-300 hover:text-yellow-500 py-2"
            href="/projects"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            className="block text-slate-300 hover:text-yellow-500 py-2"
            href="/blog"
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </div>
      )}
    </div>
  );
}

export default MainNav;
