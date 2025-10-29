// import React from "react";
// import ProjectCard from "../components/ProjectCard";
// import kids from "../assets/kids.png";
// import foody from "../assets/foody.png";
// import animes from "../assets/animes.png";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Kids Stories",
//       image: kids,
//       description:
//         "A full-stack web app that allows children to explore and read stories across various categories, with images and an engaging design.",
//       url: "https://kids-stories-eta.vercel.app/",
//       github: "https://github.com/Khaled-Oudenani/kids-stories-full-stack",
//     },
//     {
//       title: "Recipe Finder",
//       image: foody,
//       description:
//         "A front-end web app that helps users discover recipes based on the ingredients they already have, using an external API for dynamic results.",
//       url: "https://khaled-foody.netlify.app/",
//       github: "https://github.com/Khaled-Oudenani/foody-app",
//     },
//     {
//       title: "Animes",
//       image: animes,
//       description:
//         "A front-end app that lets users search and explore anime shows with detailed information fetched from a public API.",
//       url: "https://khaled-animes.netlify.app/",
//       github: "https://github.com/Khaled-Oudenani/animes-wep",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-6 mt-4">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-green-900 to-yellow-400 bg-clip-text text-transparent mb-4">
//             My Projects
//           </h1>

//           <p className=" text-md max-w-xl mx-auto leading-relaxed">
//             A collection of my recent projects. Feel free to explore the live
//             demos and source code.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from "react";
import ProjectCard from "../components/ProjectCard";
import kids from "../assets/kids.png";
import foody from "../assets/foody.png";
import animes from "../assets/animes.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Kids Stories",
      image: kids,
      description:
        "A full-stack web app that allows children to explore and read stories across various categories, with images and an engaging design.",
      url: "https://kids-stories-eta.vercel.app/",
      github: "https://github.com/Khaled-Oudenani/kids-stories-full-stack",
    },
    {
      title: "Recipe Finder",
      image: foody,
      description:
        "A front-end web app that helps users discover recipes based on the ingredients they already have, using an external API for dynamic results.",
      url: "https://khaled-foody.netlify.app/",
      github: "https://github.com/Khaled-Oudenani/foody-app",
    },
    {
      title: "Animes",
      image: animes,
      description:
        "A front-end app that lets users search and explore anime shows with detailed information fetched from a public API.",
      url: "https://khaled-animes.netlify.app/",
      github: "https://github.com/Khaled-Oudenani/animes-wep",
    },
  ];

  // إعدادات الأنيميشن للبطاقات
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // تأخير بسيط بين كل بطاقة
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-6 mt-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-900 to-yellow-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-md max-w-xl mx-auto leading-relaxed">
            A collection of my recent projects. Feel free to explore the live
            demos and source code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
