import { useNavigate } from "react-router-dom";
import { PRF } from "../../../routes/AppRoutes";
import useAuthModal from "../../../components/containers/authentication/useAuthModal";
// import { AuthType } from "../../utils/enums/AuthEnum";
import NavBar from "../../../components/containers/landingPage/navBar/NavBar";
import AuthModal from "../../../components/containers/authentication/AuthModal";
import Banner from "../../../components/containers/landingPage/banner/Banner";
import Feature from "../../../components/containers/landingPage/feature/Feature";
// import Testimonial from "../../components/containers/landingPage/testimonial/Testimonial";
import listenForScroll from "../../../shared/hooks/listenForScroll";
import { useEffect, useRef, useState } from "react";
import {
  ClassAd,
  ExamAd,
  OracleAd,
  SlateCurve,
} from "../../../assets/png";
import Footer from "../../../components/containers/footer/Footer";
import { NavLinksEnum } from "../../../utils/enums/LinksEnum";
import { AuthRegType } from "../../../app/slices/auth/types";
import Testimonial from "../../../components/containers/landingPage/testimonial/Testimonial";

const LandingPage = () => {
  const navigate = useNavigate();
  const navRef = useRef<HTMLInputElement>(null);

  const { openAuthModal, closeAuthModal, isAuthModalOpen } =
    useAuthModal();
  const { scrollY } = listenForScroll();

  const [isScrolledPastNav, setIsScrolledPastNav] = useState(false);

  const goHome = () => {
    // Go To Home Page
    navigate(PRF);
  };
  const handleAuth = (type: AuthRegType) => {
    openAuthModal(type);
  };
  const handleFeatureNav = () => {
    return;
  };

  useEffect(() => {
    if (!navRef.current && !scrollY) return;
    if (
      scrollY &&
      navRef.current &&
      scrollY >= navRef?.current?.clientHeight - 50
    ) {
      setIsScrolledPastNav(true);
    } else {
      setIsScrolledPastNav(false);
    }
  }, [navRef, scrollY]);

  return (
    <div className="">
      {/* modal */}
      <AuthModal isOpen={isAuthModalOpen} close={closeAuthModal} />

      <section className="">
        <div className="p-2 sm:p-4 md:p-8 bg-gradient-to-b from-from_banner to-to_banner">
          <div ref={navRef} className=" z-nav_bar sticky top-0">
            <NavBar
              handleAuth={handleAuth}
              goHome={goHome}
              isScrolledDown={isScrolledPastNav}
            />
          </div>
          {/* banner */}
          <Banner handleAuth={handleAuth} />
        </div>
        <img src={SlateCurve} alt="" className="w-full -mt-[1px]" />
      </section>

      <main className=" flex flex-col gap-8 mb-20">
        {/* carousel */}
        <section></section>

        {/* features */}
        <section className="flex flex-col items-center w-full mt-20 xl:mt-25 gap-20 xl:gap-30">
          <Feature
            image={OracleAd}
            title="Seeking admission and have no idea what University or Course would be a good fit for you? We've got you covered."
            description="Our ORACLE feature gives you analysis on your chances and eligibility of admission into any university. We also recommend other Universities that might fit your needs."
            handleFeatureNav={handleFeatureNav}
            id={NavLinksEnum.oracle}
            navButtonText="Try Oracle Now"
          />
          <Feature
            image={ClassAd}
            title="Learn in an exciting, precise and efficient way."
            description="Our goal with learning is to prepare you for the next step in your educational journey. We ensure our classes are updated and streamlined to ease your learning process."
            handleFeatureNav={handleFeatureNav}
            id={NavLinksEnum.classes}
            navButtonText="Start Learning"
            textPosition="left"
            buttonColor="bg-black"
            bgColor="bg-super_light_gray"
          />
          <Feature
            image={ExamAd}
            title="Ace your Exams with Updated Solutions and Resources."
            description="We procure up-to-date questions on all Examinations and provide accurate solutions (not just A,B,C,D) attached with additional resources to learn from. We attach detailed solutions and other examples so You never miss a question again."
            handleFeatureNav={handleFeatureNav}
            id={NavLinksEnum.examinationSimulator}
            navButtonText="Start Practicing"
          />
        </section>

        {/* testimonials */}
        <section className="flex flex-col justify-center gap-6 items-center mt-8 sm:mt-15 md:mt-20 xl:mt-25 px-5">
          <h1 className="text-lg md:text-xl font-semibold">
            {"What People have to say about Quidberg"}
          </h1>

          <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:w-[70%] gap-7">
            <Testimonial
              authorName="Praise Ayodele"
              role="Teacher"
              school="Quidberg Inc."
            >
              {
                "Your method is simple, straight to the point and I can practice with it everywhere, even from my phone, that's something I have never had in other learning platforms."
              }{" "}
            </Testimonial>
            <Testimonial
              authorName="Praise Ayodele"
              role="Student"
              school="Quidberg Inc."
            >
              {
                "I highly recommend Quidberg. The classes are well organized and easy to understand."
              }
            </Testimonial>
            <Testimonial
              authorName="Praise Ayodele"
              role="Teacher"
              school="Quidberg Inc."
            >
              {
                "I prefer Quidberg classes because they have a nice mix of text & images. I find that with full video courses, it can often be too easy to go into passive learning mode."
              }
            </Testimonial>
          </div>
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
