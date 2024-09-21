import { Image } from "@nextui-org/react";
import { statics } from "../../../config/images";

const FooterComponent = () => {
  return (
    <div className="grid grid-cols-10 overflow-hidden md:-mb-14">
      <div className="md:col-span-6"></div>
      <div className="col-span-10 md:col-span-4 -z-20">
        <div className="flex gap-x-3 justify-around items-end">
          <h2 className="text-xl lg:text-3xl font-bold text-darkblue text-center md:-ml-24">
            Principales Tecnologías:
          </h2>
          <Image src={statics.mongoicon} alt="mongodb-ECR" width={135} />
        </div>
        <div className="flex my-2 lg:my-4 gap-x-5 justify-center items-center">
          <Image
            radius="none"
            src={statics.fastapiicon}
            alt="fastapi-ECR"
            className="w-[110px] md:w-[135px]"
          />
          <Image
            radius="none"
            src={statics.djangoicon}
            alt="django-ECR"
            className="w-[110px] md:w-[135px]"
          />
        </div>
        <div className="flex md:my-2 lg:my-4 gap-x-5 justify-center items-center">
          <Image
            radius="none"
            className="w-[55px] md:w-[75px]"
            src={statics.angularicon}
            alt="angular-ECR"
          />
          <Image
            radius="none"
            className="w-[55px] md:w-[75px]"
            src={statics.reacticon}
            alt="react-ECR"
          />
          <Image
            radius="none"
            className="w-[35px] md:w-[45px]"
            src={statics.fluttericon}
            alt="flutter-ECR"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
