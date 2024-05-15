import { FileIcon, HomeIcon, PenBoxIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const SidebarNav = () => {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="/dashboard"
            >
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/newpost"
            >
              <PenBoxIcon className="h-4 w-4" />
              Write A new post
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/blogposts"
            >
              <FileIcon className="h-4 w-4" />
              My Blog Posts
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/dashboard/profile"
            >
              <UsersIcon className="h-4 w-4" />
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
