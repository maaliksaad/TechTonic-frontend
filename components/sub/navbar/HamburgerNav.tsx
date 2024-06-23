import { useState } from "react";
import { NavItems, authMenuItems } from "@/constants";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const HamburgerNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-gray-600 dark:text-gray-400 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween" }}
          className="fixed inset-0 z-50 flex flex-col bg-white shadow-md dark:bg-gray-950"
        >
          <div className="flex justify-between items-center p-4">
            <span className="text-lg font-semibold">TechTonic</span>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-400 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-start gap-4 p-4">
            {NavItems.map((navitem, index) => (
              <Link
                key={index}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={navitem.href}
                onClick={toggleMenu}
              >
                {navitem.name}
              </Link>
            ))}
            {session ? (
              <>
                <h1 className="font-bold text-black pt-4 ">My Account</h1>
                {authMenuItems.map((navitem, index) => (
                  <Link
                    key={index}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={navitem.href}
                    onClick={toggleMenu}
                  >
                    {navitem.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    signOut();
                    toggleMenu();
                  }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  signIn();
                  toggleMenu();
                }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Sign In
              </button>
            )}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default HamburgerNav;
