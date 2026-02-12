// import { useState } from "react";
// import UserProfile from "./profile/UserProfile";
// import { stringParser } from "../../../utils/utilFunction";
import PerformanceCard from "./performance/PerformanceCard";
// import RecentActivity from "./recentActivity/RecentActivity";
import BrowseAll from "../classes/BrowseAll";
import Activity from "./activity/Activity";
import UserProfile from "./profile/UserProfile";
import { stringParser } from "../../../../shared/utils/utilFunction";
import { Modal } from "../../../../shared/comps/ui/modal";
import { Formik } from "formik";
import { useDisclosure } from "../../../../shared/comps/ui/modal/useDisclosure";
import { Input } from "../../../../shared/comps/ui/input/Input";
import { ProfilePic } from "./profile/UserId";
import { cn } from "../../../../shared/utils";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import { SubScriptionType } from "../../../../shared/types/ComponentTypes";
import CloseIcon from "../../../../assets/comps/CloseIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../shared/comps/ui/input/select";
import { gradeOrLevel } from "../../../../shared/utils/dummyData";
import { TextArea } from "../../../../shared/comps/ui/input/textarea";

type UserProfileType = {
  fullName: string;
  // userName: string;
  dateJoined: string;
  pic: string;
  grade: string | number;
  dept: string;
  bio?: string;
  subscription: string;
};

const userProfile = {
  fullName: "Praise Ayodele",
  // userName: "",
  dateJoined: "24th June, 2024",
  pic: "",
  grade: "10",
  dept: "Science",
  bio: "I intend to gain admission into SAT",
  subscription: "premium",
};

// const dummyProfile = {
//   fullName: "John Doe",
//   userName: "john_dont",
//   dateJoined: "Created May 7th, 2023.",
//   pic: "",
//   grade: 8,
//   dept: "Arts",
//   bio: "MIT admission with scholarship",
//   subscription: "Premium",
// };

const dummySubjectsData = {
  subjects: [
    {
      name: "mathematics",
      targetScore: 80,
      currentScore: 76,
      colorCode: "#7042D2",
    },
    {
      name: "english",
      id: "english",
      targetScore: 90,
      currentScore: 84,
      colorCode: "#2FA11D",
    },
    {
      name: "further mathematics",
      id: "further mathematics",
      targetScore: 82,
      currentScore: 71,
      colorCode: "#F21D6A",
    },
    {
      name: "Biology",
      id: "Biology",
      targetScore: 82,
      currentScore: 71,
      colorCode: "#3D9AAD",
    },
  ],
};

// const dummyActivities = [
//   {
//     type: "Oracle",
//     title: "University of Lagos Admission Statistics",
//   },
//   { type: "Classes", title: "Regression and Correlation" },
//   { type: "exam", title: "WAEC Exam Simulator" },
// ];

const DashboardContainer = () => {
  const initialProfileVal: UserProfileType = userProfile;
  const handleEditProfile = () => {
    openEditModal();
  };
  const {
    close: closeEditModal,
    isOpen: isEditModalOpen,
    open: openEditModal,
  } = useDisclosure();
  const handleSubmit = () => {
    return;
  };
  return (
    <div className=" w-full flex md:flex-row gap-3 pb-6 md:gap-10 xl:gap-40 sm:px-3">
      <Modal
        isOpen={isEditModalOpen}
        close={closeEditModal}
        dialogClassName={cn(
          "w-[90%] max-w-[700px] flex flex-col p-3"
        )}
      >
        <div className="flex flex-col gap-3">
          <Button
            variant={"plain"}
            className="self-end h-6 w-6"
            onClick={closeEditModal}
          >
            <div className="h-6 w-6">
              <CloseIcon />
            </div>
          </Button>
          <EditProfileForm
            initialValues={initialProfileVal}
            handleSubmit={handleSubmit}
            subscription={"premium"}
          />
        </div>
      </Modal>
      {/* LEFT*/}
      <main className="flex flex-col  gap-5 sm:gap-6 md:gap-10 w-full md:max-w-[95%] xl:max-w-[1000px]">
        {/* Userprofile */}
        <UserProfile
          fullName={stringParser(userProfile?.fullName)}
          // userName={stringParser(userProfile?.userName)}
          dateJoined={stringParser(userProfile?.dateJoined)}
          pic={stringParser(userProfile?.pic)}
          handleEditProfile={handleEditProfile}
          grade={stringParser(8)}
          dept={stringParser(userProfile?.dept)}
          bio={stringParser(userProfile?.bio)}
          subscription={stringParser(userProfile?.subscription)}
        />
        <section className="">
          {/* BROWSE ALL */}
          <section className="w-full ">
            <BrowseAll />
          </section>
        </section>

        {/* Metric */}
        <section className="w-full flex flex-col gap-6">
          <p className="text-lg font-semibold opacity-80">
            {"My Usage"}
          </p>
          <h1 className="mb-2 md:mb-3 text-sm font-medium border-b-[0.8px] border-light_border_color/40 pb-2">
            Performance
          </h1>
          <div className="md:ml-4 flex flex-col gap-4  md:gap-10">
            {/* Performance */}
            <PerformanceCard performanceData={dummySubjectsData} />
          </div>

          <div>
            <h1 className="mb-2 md:mb-3 text-sm font-medium border-b-[0.8px] border-light_border_color/40 pb-2">
              Activity
            </h1>
            {/* Activity */}
            <div className="md:ml-4 flex flex-col gap-4  md:gap-10">
              <Activity />
            </div>
          </div>
        </section>
      </main>

      {/* RIGHT
      <section className="hidden xl:flex flex-col flex-1  xl:w-[35%] min-w-[350px]">
        <RecentActivity activities={dummyActivities} />
      </section> */}
    </div>
  );
};

export default DashboardContainer;

type FormProps = {
  initialValues: UserProfileType;
  handleSubmit: (val: UserProfileType) => void;
  subscription: SubScriptionType;
};

const EditProfileForm = ({
  initialValues,
  handleSubmit,
  subscription,
}: FormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <form
          className="w-full flex flex-col items-center gap-6 p-2"
          onSubmit={() => handleSubmit(values)}
        >
          <Button className=" self-end font-medium mb-4 ">
            Save Changes
          </Button>
          <div className="flex flex-col items-center gap-3 p-3 w-full max-w-[400px]">
            {/* <input
              type="file"
              name="avatar"
              id="avatar"
              className="hidden"
            /> */}

            <div className=" w-full">
              <p>Full name</p>
              <Input className="" />
            </div>

            <div className="relative w-full">
              <p>Grade or Level</p>
              <Select
                value={""}
                onValueChange={() => {
                  ("");
                }}
              >
                <SelectTrigger className={"max-w-[400px] flex-1"}>
                  <SelectValue
                    placeholder={"Select Grade or Level"}
                  />
                </SelectTrigger>
                <SelectContent className="bg-light_pry_bg">
                  {gradeOrLevel.map((level) => (
                    <SelectItem
                      key={level.level}
                      value={`${level.level}`}
                    >
                      {level.alias}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select />
            </div>

            <div className=" w-full">
              <p>Department</p>
              <Input className="" />
            </div>

            <div className=" w-full">
              <p>Academic Goal</p>
              <TextArea className="" rows={5} />
            </div>

            <div className="w-full">
              <p>Subscription Plan</p>
              <Button variant={"plain"} className="flex gap-2">
                <div className="flex gap-1 text-gold bg-light_gold border-[0.8px] border-gold w-fit p-[0.1rem] px-2">
                  {subscription}
                </div>

                <p className="text-main_bg font-medium">
                  Upgrade subscription
                </p>
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
