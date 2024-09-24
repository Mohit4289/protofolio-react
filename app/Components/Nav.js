"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-3 py-6 text-center bg-[#1a1a2e] text-[#f9c74f] text-2xl font-semibold z-20" id="nav">
      <h1 className="text-lg">My Journey</h1>
      <nav className="flex justify-between items-center gap-5">
        <Link href="/" className="hover:text-[#ffaf40]">Home</Link>
        <Link href="/Projects" className="hover:text-[#ffaf40]">Projects</Link>
        <Link href="/Skills" className="hover:text-[#ffaf40]">Skills</Link>
        <Link href="/Contact" className="hover:text-[#ffaf40]">Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
