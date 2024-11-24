import React from "react";

const Skills: React.FC = () => {
  const skills = ["React", "TypeScript", "Tailwind CSS", "AWS"];

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-500 p-2 rounded-lg shadow text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
