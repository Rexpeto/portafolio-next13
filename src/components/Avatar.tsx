import { motion } from "framer-motion";
import Image from "next/image";

const Avatar = ({
  duration,
  transition,
}: {
  duration: number;
  transition: string;
}) => {
  const fadeIn = () => {
    const type =
      transition === "down"
        ? { opacity: 0, translateY: -20 }
        : { opacity: 0, translateY: 20 };

    return {
      hidden: type,
      show: {
        opacity: 1,
        translateY: 0,
        transition: {
          duration,
        },
      },
    };
  };

  return (
    <motion.div
      variants={fadeIn()}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="xl:w-[800px] w-full xl:h-full absolute right-0 bottom-0 z-20 hidden xl:block"
    >
      <Image
        src="/avatar.png"
        alt="Carlos Gallardo"
        width={737}
        height={678}
        className="object-cover"
      />
    </motion.div>
  );
};

export default Avatar;
