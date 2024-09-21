import { motion } from "framer-motion";

const GeneralInfoComponent = () => {
  const topics = [
    "Nací y vivo en Bogotá, Colombia.",
    "Soy estudiante de Ingeniería de Desarrollo de Software en el Politécnico Grancolombiano.",
    "Experimentado desarrollador con Flutter, React, FastAPI, Django, entre otras tecnologías.",
    "Suelo ser tomado como líder o referente, empático, creativo, innovador, trabajo con metodologías ágiles.",
  ];

  return (
    <div className="text-darkblue text-medium md:text-lg flex justify-center items-center flex-wrap gap-2 md:gap-4 h-auto md:h-10 md:mt-0">
      {topics.map((topic, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index / 10 }}
          className="bg-lightblue text-small md:text-lg py-2 md:py-3 px-1 lg:px-6 rounded-lg font-semibold text-center shadow-lg shadow-gray-400 w-full md:w-1/5"
        >
          {topic}
        </motion.span>
      ))}
    </div>
  );
};

export default GeneralInfoComponent;
