import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authMenuItems } from "@/constants";
import { UsersIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthLinks: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="hidden md:flex h-14 lg:h-[60px] items-center gap-4 px-6 dark:bg-gray-800/40">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full w-10 h-10 dark:border-gray-800"
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
    );
  }

  return (
    <Button
      variant="ghost"
      onClick={() => signIn()}
      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    >
      Sign In
    </Button>
  );
};

export default AuthLinks;
