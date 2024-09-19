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
      <div className="flex flex-col w-[18rem]">
        <h2 className="text-blue-500 text-2xl font-semibold text-center py-1">
          Microsoft Azure
        </h2>
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            src={statics.az104}
            width={120}
          />
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            src={statics.az305}
            width={120}
          />
        </div>
      </div>
      <div className="w-[20rem] flex flex-col items-center">
        <h2 className="text-green-700 text-2xl font-semibold">Platzi</h2>
        {courses.map((course, index) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index / 10 }}
            key={course.id_course}
            className="flex gap-1 w-[17rem] h-[5rem] items-center justify-start"
          >
            <Image src={course.image_url} width={50} />
            <p className="text-center w-[15rem]">{course.title}</p>
          </motion.div>
        ))}
      </div>
      <div className="w-[20rem] flex flex-col items-center">
        <h2 className="text-darkblue text-2xl font-semibold">
          Otras Palataformas
        </h2>
        {others.map((course, index) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index / 10 }}
            key={course.id_course}
            className="flex gap-1 w-[17rem] h-[5rem] items-center justify-start"
          >
            <Image src={course.image_url} width={50} />
            <p className="text-center w-[15rem]">{course.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CerticationInfoComponent;
