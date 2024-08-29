import { Image } from "@nextui-org/react"; 
import { statics } from "../../../config/images";

const FooterComponent = () => {
  return (
    <div className="flex -mt-32 ">
      <div className="w-4/6 h-40 rounded-lg m-2"></div>
      <div className="h-40 rounded-lg gap-2">
        <div className="flex gap-3">
          <h2 className="text-3xl font-bold text-darkblue text-center -ml-24">
            Main Technologies:
          </h2>
          <Image src={statics.mongoicon} alt="mongodb-ECR" width={250} />
        </div>
        <div className="flex my-5 gap-5 justify-center items-center">
          <Image
            radius="none"
            width={190}
            src={statics.fastapiicon}
            alt="fastapi-ECR"
          />
          <Image
            radius="none"
            width={150}
            src={statics.djangoicon}
            alt="django-ECR"
          />
        </div>
        <div className="flex my-5 gap-5 justify-center items-center">
          <Image
            radius="none"
            width={110}
            src={statics.angularicon}
            alt="angular-ECR"
          />
          <Image
            radius="none"
            width={110}
            src={statics.reacticon}
            alt="react-ECR"
          />
          <Image
            radius="none"
            width={70}
            src={statics.fluttericon}
            alt="flutter-ECR"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
