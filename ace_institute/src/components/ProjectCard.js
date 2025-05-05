import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold">{project.name}</h2>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};
