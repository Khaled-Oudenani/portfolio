import myImg from "../assets/myImg.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col-reverse justify-center items-center align-middle mx-auto py-5 px-3 md:flex-row gap-5 md:gap-10">
      {/* ==== Text Section ==== */}
      <motion.div
        className="flex flex-col align-middle text-center gap-2 md:gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold text-2xl md:text-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I'm Khaled Oudenani.
        </motion.h1>

        <motion.h2
          className="font-semibold text-xl md:text-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className=" text-lg md:text-xl text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Full-Stack Developer specializing in React & Node.js
        </motion.p>

        <Link to="/projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-700 cursor-pointer duration-300 text-xl font-bold text-black rounded-2xl mx-auto px-3 py-1 m-3"
          >
            View My Work
          </motion.button>
        </Link>

        <motion.div
          className="flex flex-row justify-center items-center gap-3 md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.a
            href="https://github.com/Khaled-Oudenani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:bg-cyan-500 rounded-lg p-1 duration-300"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/khaled-oudenani/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:bg-cyan-500 rounded-lg p-1 duration-300"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khaoud1234@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:bg-cyan-500 rounded-lg p-1 duration-300"
          >
            <EmailIcon />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ==== Image Section ==== */}
      <motion.div
        className="justify-center items-center md:items-start"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.img
          src={myImg}
          alt="img"
          className="mx-auto md:mx-0 h-48 w-48 rounded-full bg-cover bg-center bg-no-repeat shadow-xl sm:h-64 sm:w-64 md:h-80 md:w-80"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
