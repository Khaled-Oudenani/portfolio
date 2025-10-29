import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node Js",
    "Express",
    "Mongo DB",
    "Git",
    "Github",
  ];

  // إعدادات الأنيميشن لعناصر المهارات
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخير بسيط بين ظهور كل مهارة
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* العنوان */}
      <motion.h1
        className="text-4xl font-bold italic mb-5 text-shadow-xs text-shadow-amber-900 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* الفقرات */}
      <motion.div
        className="justify-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I'm Khaled Oudenani, a passionate{" "}
          <span className="text-cyan-500 font-semibold">
            Full-Stack Developer
          </span>{" "}
          from Laghouat{" "}
          <span className="text-emerald-400 font-semibold">[ALGERIA]</span> with
          a strong focus on creating modern, responsive, and user-friendly web
          applications.
        </p>
        <p className="max-w-3xl mx-auto mt-3 text-lg leading-relaxed text-gray-400">
          Specializing in the MERN stack and network security.
        </p>
      </motion.div>

      {/* عنوان المهارات */}
      <motion.h1
        className="text-2xl font-bold mt-10 text-orange-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Skills
      </motion.h1>

      {/* المهارات */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-3 my-5 max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            whileHover={{ scale: 1.15, rotate: 3 }}
            className="text-xl py-1 px-3 bg-green-600 text-gray-100 font-semibold rounded-2xl shadow-md cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
