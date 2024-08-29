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
      <div className="col-span-1 h-screen"></div>
      <div className="col-span-10 flex flex-col justify-around items-start h-screen py-10">
        <div className="flex items-center gap-x-4 text-darkblue font-bold">
          <img
            src={statics.fotoPerfil}
            width={120}
            alt=""
            className="rounded-2xl shadow-md shadow-darkblue"
          />
          <h2 className="text-2xl">
            EDUARD NICOLÁS <br /> SARMIENTO HERRERA
          </h2>
        </div>
        <ul className="text-darkblue text-2xl -mt-7">
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 60 }}
              transition={{ delay: 0.4 + index / 10 }}
              className="mb-6"
            >
              {topic}
            </motion.li>
          ))}
        </ul>
        <div className="ml-16 flex gap-x-20 items-center">
          <h2 className="text-darkblue font-extrabold text-2xl -mb-20">
            SOME HOBBIES
          </h2>
          <div className="flex gap-x-8 -mb-20">
            {hobbies.map((hobbie, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index / 10 }}
                className="bg-midblue py-4 px-6 rounded-lg font-semibold text-center self-center shadow-lg"
              >
                {hobbie}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 h-screen"></div>
    </div>
  );
};

export default AboutMeScreen;
