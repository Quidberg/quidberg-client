import { useState } from "react";
import UserDataSnippet from "../../../components/containers/oracle/UserDataSnippet";
import Charts from "../../../components/containers/oracle/Charts";
import Analysis from "../../../components/containers/oracle/Analysis";
import RadarButton from "../../../components/containers/oracle/radar/RadarButton";
import Radar from "../../../components/containers/oracle/radar/Radar";
import { useDisclosure } from "../../../components/ui/modal/useDisclosure";
import InfoModal from "../../../components/containers/modals/infoModal/InfoModal";
import RadarModal from "../../../components/containers/oracle/radar/RadarModal";
// import InfoButton from "../components/components/buttons/InfoButton";

const Oracle = () => {
  const [isShown, setIsShown] = useState(false);

  const {
    isOpen: isRadarInfoModalOpen,
    close: closeRadarInfoModal,
    open: openNoEntryModal,
  } = useDisclosure();

  const {
    isOpen: isRadarModalOpen,
    close: closeRadarModal,
    open: openRadarModal,
  } = useDisclosure();

  const keyVal = [
    {
      name: "university of choice",
      value: "University of Lagos",
      isChange: true,
    },
    { name: "course of choice", value: "medicine", isChange: true },
    { name: "JAMB score", value: "301", isChange: true },
    {
      name: "Available Results",
      value: ["WAEC", "NECO", "JAMB"],
      isChange: true,
    },
  ];

  const handleRadarInfoModal = () => {
    openNoEntryModal();
  };

  const handleRadarClick = () => {
    openRadarModal();
  };
  return (
    <div className="flex flex-row sm:gap-4 md:gap-8  justify-between  w-full">
      {/* Modals */}
      <InfoModal close={closeRadarInfoModal} isOpen={isRadarInfoModalOpen}>
        <p>Radar desc</p>
      </InfoModal>

      <RadarModal close={closeRadarModal} isOpen={isRadarModalOpen} />

      <main className="flex flex-col gap-8 flex-1 ">
        <header className="flex flex-col gap-3  max-w-[90%]">
          <h1 className="font-semibold text-lg xl:text-3xl text-main_font">
            {
              "We know how confusing admission can be and intend to make it really easy."
            }
          </h1>
          <h2 className="font-medium xl:text-lg" onClick={handleRadarInfoModal}>
            <span className="text-main_bg">{"Oracle"}</span>
            {` predicts your chances of admission into the university of your choice. We provide you with all the right information to help make your admission experience better.`}
          </h2>
          <h3 className="text-sm text-light_font"></h3>
        </header>

        <section className="w-full ">
          <UserDataSnippet
            keyVal={keyVal}
            isShown={isShown}
            handleViewSnippet={() => {
              setIsShown(!isShown);
            }}
          />
        </section>

        <section className="w-full ">
          <Charts />
        </section>

        <section className="w-full ">
          <Analysis />
        </section>

        {/* 10 Padding gap for the radar floater */}
        <div className="mb-10"></div>
      </main>

      <aside className="hidden h-fit md:flex min-w-[250px] md:max-w-[250px] lg:max-w-[300px] xl:min-w-[400px] bg-main_bg/5 border-[1px] border-main_bg/10  rounded-border_radius p-3 py-4 ">
        <Radar handleRadarInfoModal={handleRadarInfoModal} />
      </aside>

      {/* FROM DATA */}

      <div className="fixed md:hidden bottom-4 right-4 z-floater">
        <RadarButton onRadarClick={handleRadarClick} />
      </div>
    </div>
  );
};

export default Oracle;
