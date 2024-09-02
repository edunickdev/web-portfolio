/* eslint-disable @typescript-eslint/no-unused-vars */
import { Project } from "../../../stores/store_types";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { statics } from "../../../config/images";

const DetailProjectComponent = (project: Project) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <motion.button
        onClick={onOpen}
        key={project.id_project}
        className="flex flex-col justify-start items-center w-1/3 h-[360px] bg-gradient-to-tr from-lightblue to-midblue rounded-2xl shadow-lg shadow-midblue hover:shadow-xl hover:shadow-midblue my-10 overflow-hidden transition-all duration-400 cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + parseInt(project.id_project) / 8 }}
      >
        <Image
          radius="none"
          src={project.main_image}
          alt=""
          className="w-full h-[15.3rem] object-cover "
        />
        <div className="px-5 py-2">
          <h2 className="text-darkblue font-bold text-lg lg:text-xl">
            {project.title}
          </h2>
          <div className="flex gap-3 flex-wrap mt-[0.18rem]">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-darkblue rounded-xl text-lightgray px-2 py-1 text-sm font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 / 5 + index,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-darkblue text-center text-3xl">
                {project.title}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <div className="flex gap-3 flex-wrap justify-center">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-darkblue rounded-xl text-lightgray px-2 py-1 text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex mt-3 justify-around items-center">
                    <Image
                      src={statics.flechaAnterior}
                      onClick={() => console.log("click")}
                      className="cursor-pointer animate-appearance-in hover:animate-pulse transition-all duration-300"
                    />
                    <Image
                      src={project.main_image}
                      alt=""
                      className="w-full h-[28rem] object-cover mx-auto"
                    />
                    <Image
                      src={statics.flechaSiguiente}
                      onClick={() => console.log("click")}
                      className="cursor-pointer animate-appearance-in hover:animate-pulse transition-all duration-300"
                    />
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailProjectComponent;
