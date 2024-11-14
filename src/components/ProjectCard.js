import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>
  );
};

export default ProjectCard;