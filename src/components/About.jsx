import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate undergraduate at IIT Madras, pursuing Data Science and Artificial Intelligence, with a strong interest in building intelligent, real-world systems.
        I have a solid foundation in C, C++, Java (OOP), Python, and Data Structures & Algorithms,
        along with hands-on experience in data analytics, data science, and full-stack development.
        I am particularly enthusiastic about integrating Generative AI into full-stack applications, combining modern AI/ML techniques with scalable software engineering.
        Actively working in the AI/ML domain, I continuously explore and implement emerging technologies to solve complex problems.
        I am also a committed open-source contributor, contributing to several well-maintained and large repositories, which has strengthened my collaboration skills, code quality, and experience with production-grade systems.
        I enjoy learning, building, and contributing to impactful technology.

      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
