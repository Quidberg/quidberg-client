import { useState } from "react";
import UserProfile from "./profile/UserProfile";
import { stringParser } from "../../utils/utilFunction";
import FormCard from "../../components/cards/FormCard";
import PerformanceCard from "./performance/PerformanceCard";
import RecentActivity from "./recentActivity/RecentActivity";

type UserProfileType = null | {
  fullName: string;
  userName: string;
  dateJoined: string;
  pic: string;
  grade: string | number;
  dept: string;
  bio: string;
  subscription: string;
};

const dummyProfile = {
  fullName: "John Doe",
  userName: "john_dont",
  dateJoined: "Created May 7th, 2023.",
  pic: "",
  grade: 8,
  dept: "Arts",
  bio: "MIT admission with scholarship",
  subscription: "Premium",
};

const dummySubjectsData = {
  subjects: [
    { name: "mathematics", targetScore: 80, currentScore: 76, colorCode: '#7042D2' },
    { name: "english", id: "english", targetScore: 90, currentScore: 84,colorCode: '#2FA11D' },
    {
      name: "further mathematics",
      id: "further mathematics",
      targetScore: 82,
      currentScore: 71,colorCode: '#F21D6A'
    },
    {
        name: "Biology",
        id: "Biology",
        targetScore: 82,
        currentScore: 71,colorCode: '#3D9AAD'
      },
  ],
};

const dummyActivities = [
    
    {type:"Oracle", title: "University of Lagos Admission Statistics"},
    {type:"Classes", title: "Regression and Correlation"},
    {type:"exam", title: "WAEC Exam Simulator"},

    
]

const DashboardContainer = () => {
  const [userProfile, 
    // setUserProfile
  ] = useState<UserProfileType>(dummyProfile);

  const handleEditProfilePic = () => {};

  return (
    <div className=" w-full flex md:flex-row gap-3 md:gap-10 xl:gap-40 sm:px-3">
      {/* LEFT*/}
      <main className="flex flex-col  gap-5 sm:gap-6 md:gap-10 w-full">
        {/* Userprofile */}
        <section className="border-b-[0.8px] border-light_border_color pb-3">
          <UserProfile
            fullName={stringParser(userProfile?.fullName)}
            userName={stringParser(userProfile?.userName)}
            dateJoined={stringParser(userProfile?.dateJoined)}
            pic={stringParser(userProfile?.pic)}
            handleEditProfile={handleEditProfilePic}
            grade={stringParser(8)}
            dept={stringParser(userProfile?.dept)}
            bio={stringParser(userProfile?.bio)}
            subscription={stringParser(userProfile?.subscription)}
          />
        </section>

        {/* Metric */}
        <section className="w-full flex flex-col ">
          <h1 className="mb-2 md:mb-3 text-sm font-medium">Metric</h1>
          <div className="md:ml-4 flex flex-col gap-4  md:gap-10">
            {/* Performance */}
            <PerformanceCard performanceData={dummySubjectsData} />

            {/* Usage */}
            <FormCard className={`aspect-square`}>usage</FormCard>
          </div>
        </section>
      </main>

      {/* RIGHT */}
      <section className="hidden xl:flex flex-col flex-1  xl:w-[35%] min-w-[350px]">
        <RecentActivity activities={dummyActivities}/>
      </section>
    </div>
  );
};

export default DashboardContainer;
