"use client";

import { navData } from "@/constant";
import Link from "next/link";
import GetIcon from "./GetIcon";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex fixed flex-col items-center xl:justify-center gap-y-4 h-max bottom-0 mt-auto xl:right-[2%] w-full xl:w-16 xl:max-w-md xl:h-screen z-50">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 h-[80px] md:px-40 xl:px-0 bg-white/10 xl:h-max py-8 backdrop-blur-lg rounded-full">
        {navData.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent"
            } flex relative items-center group hover:text-accent transition duration-150`}
          >
            <GetIcon
              icon={link.icon}
              className="text-2xl xl:text-xl"
              title={link.name}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
