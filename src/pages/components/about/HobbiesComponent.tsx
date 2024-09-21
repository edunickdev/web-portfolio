import { motion } from "framer-motion";

const HobbiesComponent = () => {
  const hobbies = [
    "Leer",
    "Caminatas ecológicas",
    "Aprender cosas nuevas",
    "Viajar",
    "Ver series de ciencia ficción",
    "Jugar videojuegos",
    "Escuchar música",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 p-5">
      {hobbies.map((hobbie, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index / 10 }}
          className="bg-midblue py-1 md:py-3 px-3 md:px-1 lg:px-6 rounded-lg font-semibold text-center self-center shadow-lg w-[17rem]"
          style={{ width: "fit-content" }}
        >
          {hobbie}
        </motion.span>
      ))}
    </div>
  );
};

export default HobbiesComponent;
