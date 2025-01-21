import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import ProjectsCards from './projectsCards';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col pt-10 gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">پروژه های من</h2>
        <Button variant="link">
          بیشتر
          <FaArrowLeftLong />
        </Button>
      </div>
      <ProjectsCards />
    </section>
  );
};

export default Projects;
