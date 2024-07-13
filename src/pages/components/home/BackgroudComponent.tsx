import { statics } from "../../../config/images";

const BackgroundComponentHome = () => {
  return (
    <div className="absolute inset-0 flex flex-col min-h-screen -z-30 col-span-12 overflow-hidden">
        <img
          src={statics.ecricon}
          alt=""
          className="ecriconh1"
        />
        <img
          src={statics.ecricon}
          alt=""
          className="ecriconh2"
        />
        <img
          src={statics.ecricon}
          alt=""
          className="ecriconh3"
        />
    </div>
  );
};

export default BackgroundComponentHome;
