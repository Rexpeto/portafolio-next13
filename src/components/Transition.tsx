"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = ({ children }: { children: any }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full" key={pathname}>
        <>
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-primary"
          />
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-secondary"
          />
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-accent"
          />
        </>
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default Transition;
