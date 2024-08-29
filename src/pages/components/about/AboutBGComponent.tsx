import { statics } from "../../../config/images";
import { motion } from "framer-motion";

const AboutBGComponent = () => {
  const images = [statics.minibgicon2, statics.minibgicon1, statics.minibgicon3, statics.minibgicon4];

  return (
    <div className="absolute inset-0 flex justify-between flex-col min-h-screen -z-30 col-span-12 overflow-hidden">
      <img src={statics.bgicon1} alt="" className="self-end w-1/5" />
      <div className="mt-20">
        {
          images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt=""
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index / 10 }}
              className="w-20"
            />
          ))
        }
      </div>
      <img src={statics.bgicon2} alt="" className="w-60" />
    </div>
  );
};

export default AboutBGComponent;
