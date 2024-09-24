import { statics } from "../../../config/images";
import { motion } from "framer-motion";

const FormalStudiesComponent = () => {
  return (
    <div className="flex flex-col justify-center gap-x-8 md:flex-row h-auto mt-1">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center md:gap-y-2 gap-y-1"
      >
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-darkblue text-lg md:text-xl font-semibold text-center md:text-start"
        >
          Ingeniería de Desarrollo de Software
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:pb-5 text-darkblue"
        >
          Politécnico Grancolombiano
        </motion.p>
        <motion.img
          src={statics.logopoli}
          className="w-20 md:w-36 rounded-md"
        />
      </motion.div>
      <div className="flex flex-col items-center gap-y-1">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-darkblue text-lg md:text-xl text-center md:text-start font-semibold"
        >
          Diplomado de Desarrollo de aplicaciones Web
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="pb-1 md:pb-5 text-darkblue"
        >
          Universidad Industrial de Santander
        </motion.p>
        <div className="flex md:flex-col gap-x-2">
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            src={statics.uislogo}
            className="w-20 md:w-36 md:-mt-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            src={statics.misiontic}
            className="w-24 md:w-36 md:-mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default FormalStudiesComponent;
