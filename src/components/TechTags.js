import React from 'react';

const TechTags = ({ technologies }) => {
  // Cores predefinidas para as tags
  const colors = [ 
    'border-blue-400 text-blue-400'
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-xs font-medium rounded-full border bg-transparent ${
            colors[index % colors.length]
          } transition-all duration-200 hover:bg-opacity-10 hover:bg-current`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechTags;
