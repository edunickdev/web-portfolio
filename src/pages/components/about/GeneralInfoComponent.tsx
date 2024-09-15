import { motion } from "framer-motion";

const GeneralInfoComponent = () => {
  const topics = [
    "Nací y vivo en Bogotá, Colombia.",
    "Soy estudiante de Ingeniería de Desarrollo de Software en el Politécnico Grancolombiano.",
    "Experimentado desarrollador con Flutter, React, FastAPI, Django, entre otras tecnologías.",
    "Suelo ser tomado como líder o referente, empático, creativo, innovador, trabajo con metodologías ágiles.",
  ];

  return (
    <div className="text-darkblue text-lg flex flex-col items-start gap-y-2">
      {topics.map((topic, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 60 }}
          transition={{ delay: 0.4 + index / 10 }}
        >
          {topic}
        </motion.span>
      ))}
    </div>
  );
};

export default GeneralInfoComponent;
