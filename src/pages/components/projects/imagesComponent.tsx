import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";
import { Project } from "../../../stores/store_types";
import { useState } from "react";

const ImageComponents = (project: Project) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images: string[] = [
    project && project.main_image,
    project && project.other_images[0].first_img.url,
    project && project.other_images[0].second_image.url,
    project && project.other_images[0].third_image.url,
  ];

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
    <div className="flex flex-col h-[28rem]">
      <div className="flex mt-3 justify-around items-center">
        <Image
          src={statics.flechaAnterior}
          onClick={goToPreviousImage}
          className="cursor-pointer animate-appearance-in hover:animate-pulse transition-all duration-300"
        />
        <Image
          src={images[currentImage]}
          alt=""
          className="w-full h-[28rem] object-cover mx-auto"
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