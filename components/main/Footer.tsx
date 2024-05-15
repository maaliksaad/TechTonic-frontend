import { NavItems } from "@/constants";
import { Github, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between border-y-2 py-3">
          <Link
            href="/"
            className="text-gray-900 font-extrabold text-4xl md:mb-0 mb-2"
          >
            TechTonic
          </Link>
          <div className="flex w-fit justify-center gap-2">
            <Twitter color="gray" />
            <Youtube color="gray" />
            <Instagram color="gray" />
            <Github color="gray" />
          </div>
        </div>
        <ul className="flex justify-center py-4 md:my-0 w-max mx-auto items-center gap-4 border-b-2">
          {NavItems.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center mt-12 font-normal text-gray-700">
          &copy; {CURRENT_YEAR} Made with Tech Tonicby Maalik Saad.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
