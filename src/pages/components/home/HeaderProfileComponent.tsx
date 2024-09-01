import { statics } from "../../../config/images";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

const HeaderProfileComponent = () => {
  const names = "EDUARD NICOLÁS".split(" ");
  const lastnames = "SARMIENTO HERRERA".split(" ");

  return (
    <div className="flex items-center justify-center gap-x-16 mt-8">
      <div className="flex flex-col">
        <div className="flex">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-darkblue text-center mr-2"
          >
            SOFTWARE
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-darkblue text-center"
          >
            ENGINEER
          </motion.h2>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-darkblue text-center"
        >
          FULLSTACK
        </motion.h2>
      </div>
      <Image
        src={statics.fotoPerfil}
        alt="Foto de perfil"
        className="rounded-2xl shadow-md shadow-darkblue -z-30 min-w-28 lg:w-36"
      />
      <div className="flex flex-col items-center">
        <div className="flex">
          {names.map((name, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index / 10 }}
              className="text-3xl font-bold text-darkblue text-center mr-2"
            >
              {name}
            </motion.h2>
          ))}
        </div>
        <div className="flex">
          {lastnames.map((lastname, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index / 10 }}
              className="text-3xl font-bold text-darkblue text-center mr-2"
            >
              {lastname}
            </motion.h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderProfileComponent;
