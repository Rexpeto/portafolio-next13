"use client";
import { motion } from "framer-motion";
import ProjectBtn from "@/components/ProjectBtn";
import Image from "next/image";

export default function Home() {
  const fadeIn = (duration: number, transition: string) => {
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
    <div className="bg-primary/60  flex flex-col xl:flex-row justify-between items-center h-full xl:h-screen">
      <div className="xl:container xl:mx-auto pt-16">
        <div className="w-full h-full mt-8 xl:mt-0">
          <motion.h1
            className="h1"
            variants={fadeIn(1.8, "down")}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming ideas <br />{" "}
            <span className="text-accent">into reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn(2.8, "down")}
            initial="hidden"
            animate="show"
            className="max-w-sm max-auto xl:max-w-xl xl:mx-0"
          >
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </motion.p>
          <motion.div
            className="flex justify-center xl:justify-start mt-5"
            variants={fadeIn(3.8, "down")}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn(3.8, "up")}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="xl:w-[800px] w-full xl:h-full absolute right-0 bottom-0 z-20"
      >
        <Image
          src="/avatar.png"
          alt="Carlos Gallardo"
          width={737}
          height={678}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
