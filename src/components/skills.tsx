"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:mb-10 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h1 className="mb-10 text-2xl font-semibold text-slate-300 capitalize">
        My Tech Stack
      </h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl bg-black/70 text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="bg-black text-white px-3 py-2"
            >
              {skill}
            </HoverBorderGradient>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
