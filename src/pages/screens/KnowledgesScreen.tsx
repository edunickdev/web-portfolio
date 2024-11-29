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
    <section className="grid grid-cols-12 h-[90vh]" ref={ref}>
      <h2 className="col-span-12 text-3xl md:text-4xl text-center text-darkblue font-bold pt-8 pb-5" ref={refs.technologies}>
        Principales tecnologías que domino
      </h2>
      <div className="col-span-1"></div>
      {inView && <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="col-span-10 flex flex-wrap justify-between p-10 gap-x-5"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-auto h-40 bg-darkblue px-16 rounded-xl"
        >
          <h2 className="text-2xl text-midblue py-2 font-semibold text-start w-full">
            BACKEND
          </h2>
          <div className="flex pt-3 w-full">
            <img src={statics.Django} alt="" />
            <img src={statics.FastAPI} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-auto h-40 bg-darkblue px-10 rounded-xl"
        >
          <h2 className="text-2xl text-midblue py-2 font-semibold w-full">
            BASES DE DATOS
          </h2>
          <div className="flex pt-3 w-full">
            <img src={statics.MongoDB} alt="" />
            <img src={statics.PostgreSQL} alt="" />
            <img src={statics.Firebase} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="h-40 bg-darkblue px-10 rounded-xl "
        >
          <h2 className="text-2xl text-midblue py-2 font-semibold w-full">
            FRONTEND
          </h2>
          <div className="flex pt-3 w-full">
            <img
              src={statics.angularicon}
              className="self-start"
              width={70}
              alt=""
            />
            <img
              src={statics.React}
              className="self-center"
              width={70}
              alt=""
            />
            <img src={statics.Flutter} width={70} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="w-auto h-40 bg-darkblue px-10 rounded-xl"
        >
          <h2 className="text-2xl text-midblue py-2 font-semibold w-full">
            LENGUAJES
          </h2>
          <div className="flex pt-3 w-full">
            <img src={statics.Python} alt="" />
            <img src={statics.JS} alt="" />
            <img src={statics.Dart} alt="" />
            <img src={statics.Typescript} alt="" />
            <img src={statics.CSharp} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="w-auto h-40 bg-darkblue px-10 rounded-xl"
        >
          <h2 className="text-2xl text-midblue py-2 font-semibold w-full">
            OTRAS TECHS QUE HE USADO
          </h2>
          <div className="flex pt-3 w-full">
            <img src={statics.Azure} alt="" />
            <img src={statics.WebScrapping} alt="" />
            <img src={statics.Automate} alt="" />
            <img src={statics.Excel} alt="" />
            <img src={statics.Git} alt="" />
            <img src={statics.PlayStore} alt="" />
            <img src={statics.Tailwind} alt="" />
          </div>
        </motion.div>
      </motion.section>}
      <div className="col-span-1"></div>
    </section>
  );
};

export default KnowledgesScreen;
