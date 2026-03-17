import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className=" w-full flex items-center justify-between px-10 py-4 bg-slate-900 text-white">
      <Link href="/" className="text-2xl font-bold">
        MyWebsite
      </Link>
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-36 text-base">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Services</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      </nav>

      {/* Button */}
      <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
        Login
      </button>
    </header>
  );
};

export default Header;
