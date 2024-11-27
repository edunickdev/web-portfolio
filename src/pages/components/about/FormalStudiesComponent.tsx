import { Study } from "../../../config/helpers/constants";

const FormalStudiesComponent = (study: Study) => {
  return (
    <div className="bg-darkblue h-36 col-span-5 rounded-tr-lg rounded-br-lg shadow-lg flex flex-col items-start justify-center pl-36 md:pl-[2.6rem] md:grid md:grid-cols-6 md:place-content-center">
      <div className="hidden md:block md:col-span-1"></div>
      <h2 className="col-span-5 text-2xl text-lightblue font-semibold">
        {study.title}
      </h2>
      <div className="hidden md:block md:col-span-1"></div>
      <h3 className="col-span-5 text-midblue font-semibold text-lg">
        {study.semester}
      </h3>
      <div className="hidden md:block md:col-span-1"></div>
      <span className="col-span-5 text-midblue font-semibold text-lg">
        {study.institution}
      </span>
      <div className="hidden md:block md:col-span-1"></div>
      <span className="col-span-5 text-midblue font-semibold text-lg">
        {study.description}
      </span>
    </div>
  );
};
export default FormalStudiesComponent;
