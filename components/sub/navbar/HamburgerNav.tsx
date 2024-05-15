import React from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { NavItems } from "@/constants";
import AuthLinks from "./AuthLinks";
import Link from "next/link";

const HamburgerNav = () => {
  return (
    <nav className="md:hidden flex h-14 lg:h-[60px] items-center gap-4  px-6 dark:bg-gray-800/40">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-full  w-10 h-10 dark:border-gray-800"
            size="icon"
            variant="ghost"
          >
            <MenuIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {NavItems.map((navitem, index) => (
            <Link
              key={index}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href={navitem.href}
            >
              <DropdownMenuLabel>{navitem.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </Link>
          ))}
          <DropdownMenuLabel>
            <AuthLinks />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default HamburgerNav;
