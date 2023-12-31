import React from "react";
import { motion } from "framer-motion";

const LeftPart = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x:30 },
    show: { opacity: 1, x:0, transition:{type: 'spring'} },
  };
  return (
    <div className="relative md:mt-0 mt-16">
      <motion.div
        className="space-y-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="pink-text-gradient">
          Hi there
        </motion.p>
        <motion.h1 className="xl:text-5xl md:text-3xl text-3xl" variants={item}>
          I'M <span className="blue-text-gradient ">SANDARBHA KOMUJWAR</span>{" "}
        </motion.h1>
        <motion.h1 className="xl:text-5xl md:text-3xl text-3xl" variants={item}>
         CODER & WEB <span className="uppercase">developer</span>{" "}
        </motion.h1>
        <motion.p className="text-sm italic mb-10" variants={item}>
        I am a highly motivated and ambitious individual with a passion for technology and problem-solving. As a web developer and DSA enthusiast, I possess a strong skill set in full-stack development, data structures, and algorithms. Throughout my academic journey , I have gained extensive practical experience in designing and implementing user-friendly websites that leverage efficient coding practices. My dedication to continuous learning and staying up-to-date with the latest industry trends allows me to deliver cutting-edge solutions and adapt to evolving technologies. With a keen eye for detail and a commitment to delivering high-quality results, I am excited to contribute my expertise and make a meaningful impact in your organisation.{" "}
        </motion.p>
      </motion.div>
      <motion.div
          className="w-32 h-10 mt-16 bg-[#ec008c] hover:bg-pink-600 transition-all ease-in duration-200 rounded-xl flex items-center justify-center cursor-pointer"
          initial={{opacity:0}} animate={{ opacity: 1 }} transition={{delay:1.2}}
        >
          <p>Hire me</p>
      </motion.div>
      <motion.p initial={{opacity:0}} animate={{ opacity: 1 }} transition={{delay:1}} className="text-[12px] italic my-5 w-80 text-purple-300 ">"The best error message is the one that never shows up." - Thomas Fuchs</motion.p>
      <div className="scroll-down relative hidden ">
        <p className="-rotate-90 absolute -bottom-24 -right-8 text-slate-300">
          Scroll Down
        </p>
        <div className="absolute top-36 opacity-60 right-0 w-7 h-14 border-solid border-2 border-gray-500 rounded-2xl flex items-center justify-center">
          <a href="#about">
            <motion.div
              className="w-3 h-3 bg-gradient-to-t from-[#fc6767] to-[#ec008c] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
