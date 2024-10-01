import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { Project } from "../../../stores/store_types";
import { useState } from "react";

const ImageComponents = (project: Project) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [project.main_image, ...project.other_images];

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
    <div className="flex flex-col h-[20rem] md:h-[25rem]">
      <div className="flex mt-1 justify-around items-center">
        <Image
          src={statics.flechaAnterior}
          onClick={goToPreviousImage}
          className="cursor-pointer animate-appearance-in hover:animate-pulse transition-all duration-300"
        />
        <Image
          src={images[currentImage]}
          alt=""
          className="w-full h-[19rem] md:h-[23rem] object-cover mx-auto"
        />
        <Image
          src={statics.flechaSiguiente}
          onClick={goToNextImage}
          className="cursor-pointer animate-appearance-in hover:animate-pulse transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default ImageComponents;
