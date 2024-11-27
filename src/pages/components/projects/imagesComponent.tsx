import { Button, Image, Tooltip } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { useState } from "react";
import { useProjects } from "../../../stores/stores";

const ImageComponents = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const project = useProjects((state) => state.projects[state.selected_project]);

  const images = project && [project.main_image, ...project.other_images];

  const goToNextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };


  return (
    <div className="flex h-full w-full justify-between items-center gap-x-2">
      <div className="flex flex-col justify-start items-center h-full p-2">
        <section className="flex justify-center items-center gap-x-1">
          <Button
            isIconOnly
            radius="full"
            className="bg-darkblue text-lightblue cursor-pointer animate-appearance-in transition-all duration-300 shadow-md shadow-midblue"
            onClick={goToPreviousImage}
          >
            <Image src={statics.flechaAnterior} className="w-9 p-2" />
          </Button>
          <Button
            isIconOnly
            radius="full"
            className="bg-darkblue text-lightblue cursor-pointer animate-appearance-in transition-all duration-300 shadow-md shadow-midblue"
            onClick={goToNextImage}
          >
            <Image src={statics.flechaSiguiente} className="w-9 p-2" />
          </Button>
        </section>
        <section className="flex flex-col justify-start items-center pt-3 gap-y-2">
          {
            project?.technologies.map((technology, index) => {
              const route = `${statics[technology]}`;

              return (
                <Tooltip
                  content={technology}
                  placement="left"
                  className="bg-midblue text-darkblue font-semibold"
                >
                  <Image key={index} src={route} className="text-sm w-9" />
                </Tooltip>
              );
            })}
        </section>
      </div>

      <Image
        src={images && images[currentImage]}
        alt=""
        className="object-cover h-[58vh] w-full border-2 border-midblue"
      />
    </div>
  );
};

export default ImageComponents;
