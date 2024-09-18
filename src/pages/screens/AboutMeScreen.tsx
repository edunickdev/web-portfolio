import { Image, Tab, Tabs } from "@nextui-org/react";
import { statics } from "../../config/images";
import AboutBGComponent from "../components/about/AboutBGComponent";
import HobbiesComponent from "../components/about/HobbiesComponent";
import CerticationInfoComponent from "../components/about/CertificationsInfoComponent";
import GeneralInfoComponent from "../components/about/GeneralInfoComponent";

const AboutMeScreen = () => {
  const tabs = [
    {
      id: "General",
      label: "General",
      content: <GeneralInfoComponent />,
    },
    {
      id: "Hobbies",
      label: "Hobbies",
      content: <HobbiesComponent />,
    },
    {
      id: "Certificaciones",
      label: "Certificaciones destacadas",
      content: <CerticationInfoComponent />,
    },
  ];

  return (
    <div className="grid grid-cols-12 h-screen justify-center items-start">
      <AboutBGComponent />
      <div className="col-span-10 flex flex-col mt-10">
        <div className="flex items-center gap-x-14 text-darkblue font-bold">
          <Image
            src={statics.fotoPerfil}
            alt=""
            className="min-w-20 w-20 lg:w-24 rounded-2xl shadow-md shadow-darkblue ml-10"
          />
          <h2 className="text-2xl">
            EDUARD NICOLÁS <br /> SARMIENTO HERRERA
          </h2>
        </div>
        <div className="mt-5">
          <Tabs
            aria-label="Dynamic tabs"
            items={tabs}
            radius="md"
            color="primary"
            size="md"
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <div className="mt-5 h-[14rem] xl:h-80">
                  {item.content}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutMeScreen;
