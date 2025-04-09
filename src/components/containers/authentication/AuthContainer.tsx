import { AuthRegType } from "../../../app/slices/auth/types";
import CloseIcon from "../../../assets/comps/CloseIcon";
import { AuthBanner } from "../../../assets/png";
import CheckText from "../../ui/tags/CheckText";
import { AuthType } from "../../../utils/enums/AuthEnum";
import AuthenticationForm from "./AuthenticationForm";

type Props = {
  authType: AuthRegType;
  close: () => void;
};

const AuthContainer = ({ authType, close, ...props }: Props) => {
  return (
    <div className=" flex gap-3 md:flex-row w-full sm:w-fit md:max-w-[700px] xl:max-w-[900px] xl:h-[calc(100vh)] ">
      {/* banner */}
      <section className="w-[45%] min-w-[250px] hidden sm:flex flex-col">
        <div className="w-full ">
          {/* banner */}
          <img
            src={AuthBanner}
            alt="auth banner"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col p-3 gap-3">
          <h1 className="text-lg font-semibold">
            Join for free today and get:
          </h1>
          <div className="flex flex-col gap-2 ml-3 overflow-y-scroll no-scrollbar">
            <CheckText>{"Quality Classes and Tutorials"}</CheckText>
            <CheckText>
              {"The best Examination simulator to adequately prepare you"}
            </CheckText>
            <CheckText>
              {"Analysis of chances of admission into your school of choice"}
            </CheckText>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="flex flex-col gap-4 xl:gap-6 flex-1 p-4 ml-2">
        <header className="flex flex-col gap-4 justify-between w-full">
          <div className="flex justify-between w-full">
            <div className="font-semibold">{"quidberg"}</div>
            <button onClick={close}>
              <CloseIcon />
            </button>
          </div>
          {authType === AuthType.signup && (
            <h1 className="text-lg sm:text-lg xl:text-xl font-semibold">
              <span className="text-main_bg">{"Join Now "}</span>
              {"and Get access to Learning resources "}
            </h1>
          )}

          {authType === AuthType.signin && (
            <h1 className="text-lg sm:text-lg xl:text-xl font-semibold">
              <span className="text-main_bg">{"Welcome "}</span>
              {"back! Please Sign in "}
            </h1>
          )}
        </header>

        <AuthenticationForm {...props} authType={authType} />
      </section>
    </div>
  );
};

export default AuthContainer;
