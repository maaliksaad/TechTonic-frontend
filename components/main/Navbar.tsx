"use client";
import Link from "next/link";
import { NavItems } from "@/constants";
import AuthLinks from "../sub/navbar/AuthLinks";
import { SessionProvider } from "next-auth/react";
import HamburgerNav from "../sub/navbar/HamburgerNav";

export default function Navbar() {
  return (
    <SessionProvider>
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm dark:bg-gray-950">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-lg font-semibold">TechTonic</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NavItems.map((navitem, index) => (
            <Link
              key={index}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href={navitem.href}
            >
              {navitem.name}
            </Link>
          ))}
        </nav>

        <AuthLinks />
        <HamburgerNav />
      </header>
    </SessionProvider>
  );
}
