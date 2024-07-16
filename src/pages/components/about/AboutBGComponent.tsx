import { statics } from "../../../config/images";

const AboutBGComponent = () => {
  return (
    <div className="absolute inset-0 flex justify-between flex-col min-h-screen -z-30 col-span-12 overflow-hidden">
      <img src={statics.bgicon1} alt="" className="self-end w-1/5" />
      <div className="-mt-16">
        <img src={statics.minibgicon2} alt="" className="self-start w-20" />
        <img src={statics.minibgicon1} alt="" className="self-start w-24" />
        <img src={statics.minibgicon3} alt="" className="self-start w-20" />
        <img src={statics.minibgicon4} alt="" className="self-start w-20" />
      </div>
      <img src={statics.bgicon2} alt="" className="w-60" />
    </div>
  );
};

export default AboutBGComponent;
