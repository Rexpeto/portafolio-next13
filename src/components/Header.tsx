import { socialData } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import GetIcon from "./GetIcon";

const Header = () => {
  return (
    <header className="absolute flex items-center px-16 xl:px-0 xl:h-[90px] w-full z-30 pb-4">
      <div className="xl:container xl:mx-auto py-8 w-full flex flex-col xl:flex-row items-center justify-between gap-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Carlos Gallardo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-8 xl:gap-4">
          {socialData.map((social) => (
            <Link href={social.path} key={social.name} target="_blank">
              <GetIcon
                icon={social.icon}
                className="text-2xl xl:text-lg hover:text-accent transition duraction-150"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
