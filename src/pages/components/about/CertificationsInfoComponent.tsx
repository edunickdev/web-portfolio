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
    if (courses.length === 0) {
      fetchCourses();
    }
  }, [courses.length, fetchCourses]);

  return (
    <div className="flex flex-col md:flex-row h-auto">
      <div className="flex md:flex-col items-start md:items-center w-full gap-x-2 md:gap-x-0">
        <h2 className="text-blue-500 text-lg md:text-2xl font-bold text-center pb-2">
          Microsoft Azure
        </h2>
        <div className="flex flex-wrap justify-center">
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            src={statics.az104}
            className="w-[52px] md:w-[110px]"
          />
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            src={statics.az305}
            className="w-[52px] md:w-[110px]"
          />
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            src={statics.dp203}
            className="w-[52px] md:w-[110px]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-start md:items-center">
        <h2 className="text-green-700 text-lg text-center md:text-2xl font-bold pb-2">
          Platzi
        </h2>
        {courses.map((course, index) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index / 10 }}
            key={course.id_course}
            className="flex gap-x-1 gap-y-1 md:gap-y-2 w-full items-center justify-center"
          >
            <Image src={course.image_url} className="w-[35px] md:w-[50px]" />
            <p className="text-left text-xs md:text-base w-[15rem]">
              {course.title}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-start md:items-center w-full">
        <h2 className="text-darkblue text-lg md:text-2xl font-bold md:pb-2">
          Otras Palataformas
        </h2>
        {others.map((course, index) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index / 10 }}
            key={course.id_course}
            className="flex gap-x-1 md:w-[17rem] gap-y-1 md:gap-y-2 items-center justify-start"
          >
            <Image src={course.image_url} className="w-[35px] md:w-[50px]" />
            <p className="text-center text-xs md:text-base md:text-left md:w-[15rem]">
              {course.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CerticationInfoComponent;
