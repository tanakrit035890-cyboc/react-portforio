import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    date: "2020",
    title: "จบชั้นประฐมศึกษาที่โรงเรียบบ้านโกรกแก้ว",
    desc: "Learn basics, hooks, and components",
  },
  {
    date: "2021",
    title: "จบชั้นมัธยมศึกษาที่โรงเรียนโนนสุวรรณพิทยาคม",
    desc: "Created personal portfolio website",
  },
  {
    date: "2022",
    title: "จบปริญญาตรีที่มหาวิทยาลัยราชภัฏบุรีรัมย์",
    desc: "Worked with real clients and projects",
  },
  {
    date: "2024",
    title: "ทำงานเป็น Programmer ที่บริษัท Bizpotential ",
    desc: "Worked with real clients and projects",
  },
];

const About = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-10">
        <div>
            
        </div>
      {/* เส้นกลาง */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2" />

      {events.map((event, i) => {
        const isLeft = i % 2 === 0;

        return (
          <motion.div
            key={i}
            className={`mb-12 flex w-full ${
              isLeft ? "justify-start pr-10" : "justify-end pl-10"
            }`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-5/12 bg-white shadow-lg rounded-xl p-5">
              {/* จุด */}
              <span
                className={`absolute top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white
                ${isLeft ? "-right-8" : "-left-8"}`}
              />

              <time className="text-sm text-indigo-500 font-medium">
                {event.date}
              </time>
              <h3 className="text-lg font-bold mt-1">{event.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{event.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default About;
