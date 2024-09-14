import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";

const FooterComponent = () => {
  return (
    <div className="grid grid-cols-10 overflow-hidden md:-mb-14">
      <div className="col-span-6"></div>
      <div className="col-span-4 -z-20">
        <div className="flex gap-x-3 justify-around items-end">
          <h2 className="text-xl lg:text-3xl font-bold text-darkblue text-center -ml-24">
            Main Technologies:
          </h2>
          <Image
            src={statics.mongoicon}
            alt="mongodb-ECR"
            width={135}
          />
        </div>
        <div className="flex my-2 lg:my-4 gap-x-5 justify-center items-center">
          <Image
            radius="none"
            src={statics.fastapiicon}
            alt="fastapi-ECR"
            width={135}
          />
          <Image
            radius="none"
            src={statics.djangoicon}
            alt="django-ECR"
            width={135}
          />
        </div>
        <div className="flex my-2 lg:my-4 gap-x-5 justify-center items-center">
          <Image
            radius="none"
            width={75}
            src={statics.angularicon}
            alt="angular-ECR"
          />
          <Image
            radius="none"
            width={75}
            src={statics.reacticon}
            alt="react-ECR"
          />
          <Image
            radius="none"
            width={45}
            src={statics.fluttericon}
            alt="flutter-ECR"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
