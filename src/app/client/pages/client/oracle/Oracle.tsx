import { useEffect, useState } from "react";
import UserDataSnippet from "../../../containers/oracle/UserDataSnippet";
import Analysis from "../../../containers/oracle/Analysis";
import RadarButton from "../../../containers/oracle/radar/RadarButton";
// import Radar from "../../../components/containers/oracle/radar/Radar";
import { useDisclosure } from "../../../../../shared/comps/ui/modal/useDisclosure";
import InfoModal from "../../../containers/modals/infoModal/InfoModal";
import RadarModal from "../../../containers/oracle/radar/RadarModal";
import { selectFormValues } from "../../../store/slices/oracleRegistration/registrationSlice";
import { useAppSelector } from "../../../store/hooks/regHook";
import { Button } from "../../../../../shared/comps/ui/buttons/Button";
import { AppRoutes } from "../../../../../routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import Requirements from "../../../containers/oracle/Requirements";
import Recommendation from "../../../containers/oracle/Recommendation";
// import InfoButton from "../components/components/buttons/InfoButton";

const demoreqs = [
  {
    id: "jambScore",
    title: "Jamb Score",
    description: "Minimum jamb score is 200",
    passed: false,
  },
  {
    id: "waecGrade",
    title: "WAEC Grade",
    description: "Minimum of 5 C's in WAEC core subjects",
    passed: true,
  },
];

const dummyCutOff = [
  {
    year: "2023",
    zone: [
      { title: "Ondo", score: 72 },
      { title: "Ekiti", score: 70 },
      { title: "General", score: 70 },
    ],
  },
  {
    year: "2024",
    zone: [
      { title: "Ondo", score: 70 },
      { title: "Ekiti", score: 70 },
      { title: "General", score: 70 },
    ],
  },
];

const percentResultsData = [
  {
    examination: "WAEC",
    score: 75,
  },
  {
    examination: "JAMB",
    score: 80,
  },
  {
    examination: "Post UTME",
    score: 80,
  },
];

const recommendedUniversities = [
  {
    university: "University of Lagos",
    isOpen: true,
    tuitionRange: "40,000 - 50,000",
    location: "Lagos, Nigeria",
  },

  {
    university: "University of Nigeria",
    isOpen: false,
    tuitionRange: "40,000 - 50,000",
    location: "Lagos, Nigeria",
  },
];

const Oracle = () => {
  const [isShown, setIsShown] = useState(true);
  const formValues = useAppSelector(selectFormValues);
  const analysis = {};
  const navigate = useNavigate();

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

  const navToOracleReg = () => {
    navigate(AppRoutes.statistics.registration.setup);
  };

  useEffect(() => console.log(formValues));
  return (
    <div className="flex flex-row sm:gap-4 md:gap-8  justify-between  w-full max-w-[800px]">
      {/* Modals */}
      <InfoModal
        close={closeRadarInfoModal}
        isOpen={isRadarInfoModalOpen}
      >
        <p>Radar desc</p>
      </InfoModal>

      <RadarModal close={closeRadarModal} isOpen={isRadarModalOpen} />

      <div className="flex flex-col gap-8 flex-1 ">
        {!analysis && (
          <section className="flex flex-col gap-3  max-w-[90%]">
            <h1 className="font-semibold text-lg xl:text-3xl text-main_font">
              {
                "We know how confusing admission can be and intend to make it really easy."
              }
            </h1>
            <h2
              className="font-medium xl:text-lg"
              onClick={handleRadarInfoModal}
            >
              <span className="text-main_bg">{"Oracle"}</span>
              {` shows the requirements for admission and your chances of admission into the university of your choice. We provide you with all the right information to help make your admission experience better.`}
            </h2>
            <Button
              className="text-lg font-semibold shadow-md mt-4"
              size={"lg"}
              onClick={navToOracleReg}
            >
              Try Oracle for free
            </Button>
          </section>
        )}

        {analysis && (
          <div>
            <header>
              <h1 className="font-main_header_weight text-lg ">
                <span className="text-main">{"Oracle "}</span>
                {"Analysis "}
              </h1>
              <p className="opacity-80">
                Oracle analyzes your chances of admission and
                recommend alternatives and next steps
              </p>
            </header>
            <section className="w-full mt-4">
              <UserDataSnippet
                keyVal={keyVal}
                isShown={isShown}
                handleViewSnippet={() => {
                  setIsShown(true);
                }}
              />
            </section>

            <main className="flex flex-col gap-6 py-4 xl:py-12 mt-5 xl:mt-10">
              <h2 className="font-sub_header_weight text-base opacity-90">
                {
                  "We have analyzed your data and provided you with your chances of admission into the university of your choice in 3 sections."
                }
              </h2>
              <section className="w-full ">
                {/* <Charts /> */}
                <Requirements requirements={demoreqs} />
              </section>

              <section className="w-full ">
                <Analysis
                  cutoffMark={dummyCutOff}
                  percentResult={percentResultsData}
                />
              </section>

              <section className="w-full ">
                <Recommendation
                  recommendedUniv={recommendedUniversities}
                />
              </section>

              {/* 10 Padding gap for the radar floater */}
              <div className="mb-10"></div>
            </main>
          </div>
        )}
      </div>

      {/* <aside className="hidden h-fit md:flex min-w-[250px] md:max-w-[250px] lg:max-w-[300px] xl:min-w-[400px] bg-main_bg/5 border-[1px] border-main_bg/10  rounded-border_radius p-3 py-4 ">
        <Radar handleRadarInfoModal={handleRadarInfoModal} />
      </aside> */}

      {/* FROM DATA */}

      <div className="fixed md:hidden bottom-4 right-4 z-floater">
        <RadarButton onRadarClick={handleRadarClick} />
      </div>
    </div>
  );
};

export default Oracle;
