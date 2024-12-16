import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sections } from "../../config/helpers/constants";
import { Tooltip } from "@nextui-org/react";

const KnowledgesScreen = ({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) => {

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });


  return (
    <section
      className="flex flex-col justify-start items-start md:grid md:grid-cols-12 h-auto min-h-[85vh] p-8"
      ref={ref}
    >
      <h2
        className="col-span-12 text-2xl md:text-4xl text-center text-darkblue font-bold pt-12 pb-6"
        ref={refs.technologies}
      >
        Principales tecnologías que domino
      </h2>
      <div className="col-span-1"></div>
      {inView && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="col-span-10 flex flex-wrap justify-around px-3 py-14 gap-2 md:gap-5"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="rounded-xl py-2 px-3 w-auto flex flex-col items-center justify-center gap-2 md:gap-5"
            >
              <h2 className="md:text-2xl text-darkblue font-semibold text-center w-full">
                {section.title}
              </h2>
              <div className="flex">
                {section.technologies.map((technology, index) => {
                  const result = technology.split("images")[1].split("/")[1].split(".")[0]
                  return (<Tooltip content={result} placement="bottom" className="p-2 bg-lightblue text-darkblue font-semibold">
                    <img
                      key={index}
                      className="w-[40px] md:w-[68px]"
                      src={technology}
                      alt=""
                    />
                  </Tooltip>)
                })}
              </div>
            </motion.div>
          ))}
        </motion.section>
      )}
      <div className="col-span-1"></div>
    </section>
  );
};

export default KnowledgesScreen;
