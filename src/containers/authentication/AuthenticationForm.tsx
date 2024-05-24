import RoundedButton from "../../components/buttons/RoundedButton";
import InputField from "../../components/fields/InputField";
import { AuthType } from "../../utils/enums/AuthEnum";
import useAuthModal from "./useAuthModal";

export interface AuthCompProps {
  authType: "signin" | "signup" | "login" | null;
}

const AuthenticationForm = ({ authType }: AuthCompProps) => {
  const handleInputField = () => {};
  const {toggleAuthType, openForgotPswdModal} = useAuthModal()

  const handleSubmit = () => {};
  
  return (
    <div className="max-w-[600px]">

    
    <form onSubmit={handleSubmit}>
      <div>
        {/* 3rd Party Auth */}

        {/* in-house Auth */}
        <div className="flex flex-col gap-2 xl:gap-4">
        {authType === "signup" &&<InputField
            id="name"
            type="name"
            title="Full Name"
            value={""}
            handleChange={handleInputField}
            isOutlined
          />}
          <InputField
            id="email"
            type="email"
            title="Email"
            value={""}
            handleChange={handleInputField}
            isOutlined
          />
          <InputField
            id="password"
            type="email"
            title="Password"
            value={""}
            handleChange={handleInputField}
            isOutlined
          />
        </div>

        {authType === AuthType.signin &&<div className="w-full flex justify-end mt-2">
          <button className="text-main_bg text-sm" type="button" onClick= {openForgotPswdModal}>
            {"Forgot Password?"}
          </button>
        </div>}
      </div>

      <RoundedButton className="w-full mt-4 xl:mt-10 py-2">
        {authType === AuthType.signin ? "Login" : "Create an account"}
      </RoundedButton>

      <div className="w-full flex justify-center mt-4">
        <button type="button" onClick={toggleAuthType}>
          {authType === AuthType.signin ? <p>
            {"Don't have an account? "}
            <span className="text-main_bg">{"Sign Up"}</span>
          </p>: <p>{"Already have an account? "}
            <span className="text-main_bg">{"Log in"}</span></p>}
        </button>
      </div>
    </form>
    </div>
  );
};

export default AuthenticationForm;
