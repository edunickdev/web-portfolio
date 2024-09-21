import { Tab, Tabs } from "@nextui-org/react";
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
    // {
    //   id: "Estudios Formales",
    //   label: "Estudios formales",
    //   content: <CerticationInfoComponent />,
    // },
  ];

  return (
    <div className="grid grid-cols-12 h-auto md:h-screen justify-center items-start">
      <AboutBGComponent />
      <div className="col-span-12 grid grid-cols-12 mt-5 md:mt-10">
        <h2 className="col-span-12 text-2xl md:text-4xl text-center text-darkblue font-bold py-2">
          Sobre mí
        </h2>
        <Tabs
          aria-label="sections me"
          items={tabs}
          size="md"
          variant="underlined"
          color="primary"
          className="col-span-12 mt-1 md:mt-5"
        >
          {(item) => (
            <Tab
              key={item.id}
              title={item.label}
              className="text-sm md:text-lg col-span-12"
            >
              <div className="h-auto">{item.content}</div>
            </Tab>
          )}
        </Tabs>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutMeScreen;
