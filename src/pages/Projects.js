import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of Project 1',
      image: 'path-to-image.jpg',
      link: 'https://github.com/your-project-1'
    },
    {
      title: 'Project 2',
      description: 'A description of Project 2',
      image: 'path-to-image.jpg',
      link: 'https://github.com/your-project-2'
    },
    // Add more projects
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
