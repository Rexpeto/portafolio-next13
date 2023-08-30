import Image from "next/image";
import Link from "next/link";
import GetIcon from "./GetIcon";

const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="flex justify-center items-center relative bg-circleStar bg-center bg-cover w-[185px] h-[185px] group"
      >
        <Image
          src="/rounded-text.png"
          className="animate-spin-slow"
          alt="project"
          width={141}
          height={148}
        />
        <GetIcon
          icon="HiArrowRight"
          className="absolute text-2xl group-hover:translate-x-2 transition duration-300 ease-in-out"
        />
      </Link>
    </div>
  );
};

export default ProjectBtn;
