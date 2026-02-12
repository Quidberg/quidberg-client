import { AuthRegType } from "../../../store/slices/auth/types";
import ExamIcon from "../../../../../assets/comps/ExamIcon";
import StatIcon from "../../../../../assets/comps/StatIcon";
import TutorIcon from "../../../../../assets/comps/TutorIcon";
import RoundedButton from "../../../../../shared/comps/ui/buttons/RoundedButton";
import LineHeader from "../../../../../shared/comps/ui/tags/LineHeader";
import { AuthType } from "../../../../../shared/utils/enums/AuthEnum";
import { NavLinksEnum } from "../../../../../shared/utils/enums/LinksEnum";
import ExploreButton from "./ExploreButton";

type Props = {
  handleAuth: (type: AuthRegType) => void;
};

const Banner = ({ handleAuth }: Props) => {
  return (
    <div className=" w-full flex flex-col gap-6 items-center text-center sm:px-5 px-4 py-6">
      <h1 className="text-xl md:text-3xl xl:text-5xl font-bold text-main_bg">
        {"Enhancing the Quality of Education."}
      </h1>
      <h2 className="sm:text-lg md:text-xl  sm:font-semibold text-white w-full sm:w-[90%] max-w-[900px]">
        {
          "A platform where students are given the edge and resources to compete with top students globally."
        }
      </h2>

      <div className="flex text-white/70">
        <p>{"Are you ready to launch into QuidBerg Orbit?"}</p>
      </div>

      <section className="flex gap-5 w-full justify-center">
        <RoundedButton
          className="py-2 px-2 flex-1 sm:flex-none"
          onClick={() => handleAuth(AuthType.signup)}
        >
          <>
            <p className="hidden sm:flex">{"Create account"}</p>
            <p className="sm:hidden">{"Sign Up"}</p>
          </>
        </RoundedButton>
        <RoundedButton
          className="py-2 px-2 flex-1 sm:flex-none"
          bgColor="bg-white_button_color"
          textColor="text-main_bg"
          onClick={() => handleAuth(AuthType.signin)}
        >
          <>
            <p className="hidden sm:flex">
              {"Login to your account"}
            </p>
            <p className="sm:hidden">{"Login"}</p>
          </>
        </RoundedButton>
      </section>

      <section className="flex flex-col gap-3 bg-inherit w-full">
        <LineHeader>Explore</LineHeader>
        <div className="flex gap-3 flex-wrap justify-center">
          <ExploreButton image={TutorIcon} id={NavLinksEnum.classes}>
            {"Classes"}
          </ExploreButton>
          <ExploreButton
            image={ExamIcon}
            id={NavLinksEnum.examinationSimulator}
          >
            {"Exam Simulator"}
          </ExploreButton>
          <ExploreButton image={StatIcon} id={NavLinksEnum.oracle}>
            {"Oracle"}
          </ExploreButton>
        </div>
      </section>
    </div>
  );
};

export default Banner;
