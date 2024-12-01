import { motion } from "framer-motion";
import { statics } from "../../config/images";
import { useInView } from "react-intersection-observer";

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
    <section className="flex flex-col md:grid md:grid-cols-12 h-auto md:h-[90vh] p-3" ref={ref}>
      <h2
        className="col-span-12 text-2xl md:text-4xl text-center text-darkblue font-bold pt-8 pb-5"
        ref={refs.technologies}
      >
        Principales tecnologías que domino
      </h2>
      <div className="hidden md:col-span-1"></div>
      {inView && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="col-span-10 flex flex-wrap justify-between p-3 md:p-10 gap-x-3 gap-y-2 md:gap-x-5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-auto h-auto md:h-40 bg-darkblue md:px-16 rounded-xl p-2"
          >
            <h2 className="text-lg md:text-2xl text-midblue py-2 font-semibold md:text-start w-full">
              BACKEND
            </h2>
            <div className="flex md:pt-3 md:w-full">
              <img className="w-[40px] md:w-[70px]" src={statics.Django} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.FastAPI} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-auto h-auto md:h-40 bg-darkblue md:px-10 rounded-xl p-2"
          >
            <h2 className="text-lg md:text-2xl text-midblue py-2 font-semibold w-full">
              BASES DE DATOS
            </h2>
            <div className="flex justify-center md:pt-3 md:w-full">
              <img className="w-[40px] md:w-[70px]" src={statics.MongoDB} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.PostgreSQL} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Firebase} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="h-auto md:h-40 bg-darkblue md:px-10 rounded-xl p-2"
          >
            <h2 className="text-lg md:text-2xl text-midblue py-2 font-semibold w-full">
              FRONTEND
            </h2>
            <div className="flex justify-center md:pt-3 md:w-full">
              <img src={statics.angularicon} className="w-[40px] md:w-[70px]" alt="" />
              <img src={statics.React} className="w-[40px] md:w-[70px]" alt="" />
              <img src={statics.Flutter} className="w-[40px] md:w-[70px]" alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="w-auto h-auto md:h-40 bg-darkblue px-4 md:px-10 rounded-xl p-2"
          >
            <h2 className="text-lg md:text-2xl text-midblue py-2 font-semibold w-full">
              LENGUAJES
            </h2>
            <div className="flex md:pt-3 md:w-full">
              <img className="w-[40px] md:w-[70px]" src={statics.Python} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.JS} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Dart} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Typescript} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.CSharp} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-auto h-auto md:h-40 bg-darkblue px-4 md:px-10 rounded-xl p-2"
          >
            <h2 className="text-lg md:text-2xl text-midblue py-2 font-semibold w-full">
              OTRAS TECHS QUE HE USADO
            </h2>
            <div className="flex md:pt-3 md:w-full">
              <img className="w-[40px] md:w-[70px]" src={statics.Azure} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.WebScrapping} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Automate} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Excel} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Git} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.PlayStore} alt="" />
              <img className="w-[40px] md:w-[70px]" src={statics.Tailwind} alt="" />
            </div>
          </motion.div>
        </motion.section>
      )}
      <div className="hidden md:col-span-1"></div>
    </section>
  );
};

export default KnowledgesScreen;
