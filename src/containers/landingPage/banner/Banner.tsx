import { useNavigate } from "react-router-dom";
import { AuthRegType } from "../../../app/slices/auth/types";
import ExamIcon from "../../../assets/comps/ExamIcon";
import StatIcon from "../../../assets/comps/StatIcon";
import TutorIcon from "../../../assets/comps/TutorIcon";
import RoundedButton from "../../../components/buttons/RoundedButton";
import LineHeader from "../../../components/tags/LineHeader";
import { AuthType } from "../../../utils/enums/AuthEnum";
import { NavLinksEnum } from "../../../utils/enums/LinksEnum";
import { navLinks } from "../../nav_bar/Links";
import ExploreButton from "./ExploreButton";

type Props = {
  handleAuth: (type: AuthRegType) => void;
};

const Banner = ({ handleAuth }: Props) => {
  const navigate = useNavigate()
  const handleExploreNav = (id:string)=>{
    const nav = navLinks?.find(link=>link.alias.toLowerCase() === id.toLowerCase())
    if (nav){
      navigate(nav.link)
    }
  }

  return (
    <div className=" w-full flex flex-col gap-6 items-center text-center sm:px-5">
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
          className="py-2 px-2 "
          onClick={() => handleAuth(AuthType.signup)}
        >
          {"Create account"}
        </RoundedButton>
        <RoundedButton
          className="py-2 px-2"
          bgColor="bg-white_button_color"
          textColor="text-main_bg"
          onClick={() => handleAuth(AuthType.signin)}

        >
          {"Login to your account"}
        </RoundedButton>
      </section>

      <section className="flex flex-col gap-3x bg-inherit w-full">
        <LineHeader>Explore</LineHeader>
        <div className="flex gap-3 flex-wrap justify-center">
          <ExploreButton image={TutorIcon} handleExplore={handleExploreNav} id={NavLinksEnum.classes}>{"Classes"}</ExploreButton>
          <ExploreButton image={ExamIcon} handleExplore={handleExploreNav} id= {NavLinksEnum.examination}>{"Exam Simulator"}</ExploreButton>
          <ExploreButton image={StatIcon} handleExplore={handleExploreNav} id= {NavLinksEnum.oracle}>{"Oracle"}</ExploreButton>

        </div>
      </section>
    </div>
  );
};

export default Banner;
