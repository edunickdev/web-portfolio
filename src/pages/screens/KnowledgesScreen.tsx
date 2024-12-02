import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sections } from "../../config/helpers/constants";

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
    <section className="flex flex-col justify-start items-start md:grid md:grid-cols-12 h-auto md:h-[75vh] p-8" ref={ref}>
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
          className="col-span-10 flex flex-wrap px-3 py-14 gap-2 md:gap-5"
        >
          { 
            sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="bg-darkblue rounded-xl p-3"
              >
                <h2 className="text-medium md:text-2xl text-midblue font-semibold md:text-start w-full">
                  {section.title}
                </h2>
                <div className="flex">
                  {section.technologies.map((technology, index) => (
                    <img key={index} className="w-[40px] md:w-[70px]" src={technology} alt="" />
                  ))}
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
