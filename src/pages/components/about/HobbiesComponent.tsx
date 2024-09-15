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
    <div className="flex flex-wrap gap-3">
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
  );
};

export default HobbiesComponent;
