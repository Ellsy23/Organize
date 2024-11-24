import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A cool project built with React.",
      github: "#",
      demo: "#",
    },
    {
      title: "Project 2",
      description: "Another great project using TypeScript.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold">{project.title}</h4>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="mt-2">
              <a href={project.demo} className="text-blue-500 mr-2">
                Demo
              </a>
              <a href={project.github} className="text-blue-500">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
