import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";

const FooterComponent = () => {
  return (
    <div className="grid grid-cols-10 overflow-hidden md:-mb-16">
      <div className="col-span-6"></div>
      <div className="col-span-4 -z-20">
        <div className="flex gap-x-3 justify-around items-end">
          <h2 className="text-2xl lg:text-3xl font-bold text-darkblue text-center -ml-24">
            Main Technologies:
          </h2>
          <Image
            src={statics.mongoicon}
            alt="mongodb-ECR"
            className="w-auto h-10 lg:h-20"
          />
        </div>
        <div className="flex my-2 lg:my-4 gap-x-5 justify-center items-center">
          <Image
            radius="none"
            src={statics.fastapiicon}
            alt="fastapi-ECR"
            className="w-full h-8 lg:h-12"
          />
          <Image
            radius="none"
            src={statics.djangoicon}
            alt="django-ECR"
            className="w-full h-8 lg:h-14"
          />
        </div>
        <div className="flex my-2 lg:my-4 gap-x-5 justify-center items-center">
          <Image
            radius="none"
            src={statics.angularicon}
            alt="angular-ECR"
            className="h-20 lg:h-24"
          />
          <Image
            radius="none"
            className="h-20 lg:h-24"
            src={statics.reacticon}
            alt="react-ECR"
          />
          <Image
            radius="none"
            className="h-20 lg:h-24"
            src={statics.fluttericon}
            alt="flutter-ECR"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
