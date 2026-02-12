import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import Rdimg from "../assets/rd2.png";
import Smfimg from "../assets/smf.png";
import Prdtrain from "../assets/prdtrain.png";

const projects = [
  {
    title: "Repair Management System",
    image: Rdimg,
    description:
      "Online repair notification system. It allows users to report office equipment repairs without having to bring them in.",
    tech: ["Html, Css, Javascript", "Bootstrap5", "PHP", "MySQL"],
  },
  {
    title: "Smart Dairy Farm",
    image: Smfimg,
    description:
      "Smart farm management system for monitoring and managing dairy farm operations efficiently.",
    tech: ["Html, Css, Javascript", "Bootstrap5", "PHP", "MySQL"],
  },
  {
    title: "Prd Training",
    image: Prdtrain,
    description:
      "Training management system for organizing courses, participants, and certification processes.",
    tech: ["Html, Css, Javascript", "Bootstrap5", "PHP", "MySQL"],
  },
];

const Portforio = () => {
  return (
    <div className="container mx-auto max-w-[1340px] p-2 pt-2 text-center bg-white rounded-md shadow-lg">
      <h2 className="text-[2.25rem] font-semibold text-balance">Portforio</h2>
      <p>Website development portfolio.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px] m-10 md:m-4">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg p-4">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl shadow-md"
            />

            <h3 className="pt-2 font-semibold">{project.title}</h3>

            <p className="text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portforio;
