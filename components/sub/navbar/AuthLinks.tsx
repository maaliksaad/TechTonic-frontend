"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { UsersIcon } from "lucide-react";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { authMenuItems } from "@/constants";

const AuthLinks = () => {
  const { data: session, status } = useSession();
  console.log(`session:${session}, status: ${status}`);
  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Button
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            variant="outline"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Link href="/login" className="sm:hidden">
            Sign In
          </Link>
        </>
      ) : (
        <>
          <nav className="hidden md:flex h-14 lg:h-[60px] items-center gap-4  px-6 dark:bg-gray-800/40">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full  w-10 h-10 dark:border-gray-800"
                  size="icon"
                  variant="ghost"
                >
                  <UsersIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {authMenuItems.map((navitem, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={navitem.href}>{navitem.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button variant="ghost" onClick={() => signOut()}>
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </>
      )}
    </>
  );
};

export default AuthLinks;
