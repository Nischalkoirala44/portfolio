import React from 'react';

const skills = [
  { name: "ReactJS", level: "Beginner" },
  { name: "MongoDB", level: "Intermediat" },
  { name: "JavaScript", level: "Beginner" },
  { name: "NextJS", level: "Beginner" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Beginner" }
];

const getSkillColor = (level: string): string => {
  switch (level) {
    case "Expert":
      return "bg-green-500";
    case "Advanced":
      return "bg-emerald-400";
    case "Intermediate":
      return "bg-yellow-400";
    case "Beginner":
      return "bg-red-400";
    default:
      return "bg-gray-400";
  }
};

const getPercentage = (level: string): number => {
  switch (level) {
    case "Expert":
      return 100;
    case "Advanced":
      return 80;
    case "Intermediate":
      return 60;
    case "Beginner":
      return 30;
    default:
      return 50;
  }
};

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-gray-300 text-lg">Here are the technologies I work with and my proficiency levels</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getSkillColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(
                        skill.level
                      )}`}
                      style={{ width: `${getPercentage(skill.level)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Proficiency</span>
                    <span className="text-sm font-medium text-gray-500">{getPercentage(skill.level)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
