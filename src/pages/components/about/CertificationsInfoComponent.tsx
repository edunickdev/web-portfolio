/* eslint-disable react-hooks/exhaustive-deps */
import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { useProjects } from "../../../stores/stores";
import { useEffect } from "react";
import { motion } from "framer-motion";

const CerticationInfoComponent = () => {
  const courses = useProjects((state) => state.platzi_courses);
  const others = useProjects((state) => state.other_courses);
  const fetchCourses = useProjects((state) => state.fetchProjects);

  useEffect(() => {
    fetchCourses();
  }, [courses]);

  return (
    <div className="flex gap-2 h-auto max-h-56">
      <div className="flex md:flex-col flex-wrap md:w-[18rem]">
        <div className="flex md:flex-col items-center w-full md:-ml-96">
          <h2 className="text-blue-500 text-lg md:text-2xl font-semibold text-center py-1 pr-5">
            Microsoft Azure
          </h2>
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              src={statics.az104}
              className="w-[52px] md:w-[120px]"
            />
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              src={statics.az305}
              className="w-[52px] md:w-[120px]"
            />
          </div>
        </div>
        <div className="md:w-[20rem] flex flex-col items-start md:items-center w-full">
          <h2 className="text-green-700 text-lg md:text-2xl font-semibold">
            Platzi
          </h2>
          {courses.map((course, index) => (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index / 10 }}
              key={course.id_course}
              className="flex gap-1 md:w-[17rem] md:h-[5rem] items-center justify-start"
            >
              <Image src={course.image_url} className="w-[35px] md:w-[60px]" />
              <p className="text-left text-xs md:text-base w-[15rem]">
                {course.title}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="md:w-[20rem] flex flex-col items-start md:items-center w-full">
          <h2 className="text-darkblue text-lg md:text-2xl font-semibold">
            Otras Palataformas
          </h2>
          {others.map((course, index) => (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index / 10 }}
              key={course.id_course}
              className="flex gap-1 md:w-[17rem] md:h-[5rem] items-center justify-start"
            >
              <Image src={course.image_url} className="w-[35px] md:w-[60px]" />
              <p className="text-center text-xs md:text-base md:text-left md:w-[15rem]">
                {course.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CerticationInfoComponent;
