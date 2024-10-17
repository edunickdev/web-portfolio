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
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";
import ImageComponents from "./imagesComponent";
import DescriptionComponent from "./descriptionComponent";

const DetailProjectComponent = (project: Project) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const tabs = [
    {
      id: "imagenes",
      label: "Imágenes",
      content: <ImageComponents {...project} />,
    },
    {
      id: "Descripción",
      label: "Descripción",
      content: <DescriptionComponent {...project} />,
    },
  ];

  return (
    <>
      <motion.button
        onClick={onOpen}
        key={project.id_project}
        className="flex flex-col justify-start items-center w-56 md:w-72 h-[300px] md:h-[350px] bg-gradient-to-tr from-lightblue to-midblue rounded-2xl shadow-lg shadow-midblue hover:shadow-xl hover:shadow-midblue my-10 overflow-hidden transition-all duration-400 cursor-pointer"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 5 }}
        transition={{ delay: 1 + parseInt(project.id_project) / 8 }}
      >
        <Image
          radius="none"
          src={project.main_image}
          alt=""
          className="w-full h-[10rem] md:h-[15rem] object-cover"
        />
        <div className="px-5 py-1">
          <h2 className="text-darkblue font-bold text-lg lg:text-xl">
            {project.title}
          </h2>
          <div className="flex gap-1 flex-wrap mt-[0.15rem]">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-darkblue rounded-xl text-lightgray px-2 py-1 text-sm font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.03 + index,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex text-darkblue justify-center gap-x-4 text-3xl items-center">
                <h2>{project.title}</h2>
              </ModalHeader>
              <ModalBody>
                <Tabs aria-label="sections" items={tabs} color="primary">
                  {(tab) => (
                    <Tab key={tab.id} title={tab.label}>
                      <Card>
                        <CardBody className="bg-gray-200">
                          {tab.content}
                        </CardBody>
                      </Card>
                    </Tab>
                  )}
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailProjectComponent;
