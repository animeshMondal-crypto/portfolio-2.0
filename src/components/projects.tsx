import React from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./project-card";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

function Projects() {
  return (
    <div className="my-20 px-4">
      <h1 className="text-center text-2xl font-semibold text-slate-300 capitalize mb-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center my-5">
        <Link href="/projects">
          <Button variant="secondary" className="gap-1">
            view all
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
