import { statics } from "../../../config/images";

const BackgroundComponentHome = () => {
  return (
    <div className="absolute inset-0 flex flex-col min-h-screen -z-30 col-span-12 overflow-hidden bg-blue-50">
      <img
        src={statics.ecricon}
        alt={"ECR"}
        loading="eager"
        className="ecriconh1"
      />
      <img
        src={statics.ecricon}
        alt={"ECR"}
        loading="eager"
        className="ecriconh2"
      />
      <img
        src={statics.ecricon}
        alt={"ECR"}
        loading="eager"
        className="ecriconh3"
      />
    </div>
  );
};

export default BackgroundComponentHome;
