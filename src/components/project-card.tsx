"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
};

const ProjectCard = ({ project }: { project: Props }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black w-full sm:max-w-sm h-[400px] rounded-xl shadow-2xl flex flex-col p-6 transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-1 animate-gradient">
        <div className="relative h-full w-full rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white font-bold text-2xl mb-4 text-center">
              {project.name}
            </h3>
            <p className="text-white text-base text-center mb-6">
              {project.description}
            </p>
            <ul className="flex flex-wrap justify-center gap-2 mb-6">
              {["React", "Next.js", "Tailwind CSS", "Node.js"].map(
                (tech, index) => (
                  <li
                    key={index}
                    className="border rounded-full px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
            <div className="flex justify-center items-center gap-5">
              <a
                href={project.githubLink}
                className="flex items-center gap-2 bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600 transition-colors duration-200"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.liveLink}
                className="flex items-center gap-2 bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600 transition-colors duration-200"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
