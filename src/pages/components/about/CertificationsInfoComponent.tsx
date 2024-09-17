/* eslint-disable react-hooks/exhaustive-deps */
import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { useProjects } from "../../../stores/stores";
import { useEffect } from "react";

const CerticationInfoComponent = () => {
  const courses = useProjects((state) => state.platzi_courses);
  const fetchCourses = useProjects((state) => state.fetchProjects);
  const getApiKey = useProjects((state) => state.fetchAPIKey);

  useEffect(() => {
    if (courses.length > 0) {
      return;
    }
    getApiKey();
    fetchCourses();
  }, [courses]);

  return (
    <div className="flex gap-2">
      <div className="flex flex-col w-[18rem]">
        <h2 className="text-blue-500 text-2xl font-semibold text-center py-1">
          Microsoft Azure
        </h2>
        <div className="flex">
          <Image src={statics.az104} width={150} />
          <Image src={statics.az305} width={150} />
        </div>
      </div>
      <div className="w-[20rem] flex flex-col items-center">
        <h2 className="text-green-700 text-2xl font-semibold">Platzi</h2>
        {courses.map((course) => (
          <div
            key={course.id_course}
            className="flex gap-1 w-[17rem] h-16 items-center justify-start"
          >
            <Image src={course.image_url} width={50} />
            <p className="text-center w-[15rem]">{course.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CerticationInfoComponent;
