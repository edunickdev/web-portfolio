import { statics } from "../../../config/images"; 

const HeaderProfileComponent = () => {
  return (
    <div className="flex items-center justify-center gap-20 -mt-8">
      <h2 className="text-3xl font-bold text-darkblue text-center">
        SOFTWARE DEVELOPER
      </h2>
      <img
        src={statics.fotoPerfil}
        width={150}
        alt=""
        className="rounded-2xl shadow-md shadow-darkblue"
      />
      <h2 className="text-3xl font-bold text-darkblue text-center">
        EDUARD NICOLÁS <br /> SARMIENTO HERRERA
      </h2>
    </div>
  );
};

export default HeaderProfileComponent;
