import { Image } from "@nextui-org/react";
import { statics } from "../../config/images";
import AboutBGComponent from "../components/about/AboutBGComponent";
import { motion } from "framer-motion";

const AboutMeScreen = () => {
  const hobbies = [
    "Read books",
    "Trekking",
    "Learn new things",
    "Travel",
    "Watch movies and series",
  ];
  const topics = [
    "I’m from and I live in Bogotá , Colombia",
    "I’m student of Software Engineer in Politécnico Grancolombiano.",
    "I’m experienced developer using React, Flutter and FastAPI between other technologies",
    "I’m experienced developer with B2 english and softskills like good communication, team working and solving problem.",
  ];

  return (
    <div className="grid grid-cols-12">
      <AboutBGComponent />
      <div className="col-span-10 flex flex-col justify-start items-start gap-y-10 pt-5">
        <div className="flex items-center gap-x-14 text-darkblue font-bold">
          <Image
            src={statics.fotoPerfil}
            alt=""
            className="min-w-20 w-20 lg:w-24 rounded-2xl shadow-md shadow-darkblue"
          />
          <h2 className="text-2xl">
            EDUARD NICOLÁS <br /> SARMIENTO HERRERA
          </h2>
        </div>
        <ul className="w-full text-darkblue text-lg lg:text-xl">
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 60 }}
              transition={{ delay: 0.4 + index / 10 }}
              className="mb-2 lg:mb-3"
            >
              {topic}
            </motion.li>
          ))}
        </ul>
        <div className="ml-8 lg:ml-16 flex gap-x-10 items-center mt-[9.2rem]">
          <h2 className="text-darkblue font-extrabold text-xl">SOME HOBBIES</h2>
          <div className="flex gap-x-3 lg:gap-x-8">
            {hobbies.map((hobbie, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index / 10 }}
                className="bg-midblue py-3 px-1 lg:px-6 rounded-lg font-semibold text-center self-center shadow-lg w-28 md:w-40"
              >
                {hobbie}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeScreen;
