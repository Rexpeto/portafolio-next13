import { socialData } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import GetIcon from "./GetIcon";

const Header = () => {
  return (
    <header className="absolute flex items-center px-16 xl:px-0 xl:h-[90px] w-full z-30 pb-4">
      <div className="xl:container xl:mx-auto py-8 w-full flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="Carlos Gallardo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-6 xl:gap-4">
          {socialData.map((social) => (
            <Link href={social.path} key={social.name} target="_blank">
              <GetIcon icon={social.icon} className="text-xl xl:text-lg" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
