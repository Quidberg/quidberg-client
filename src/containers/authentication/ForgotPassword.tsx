import CloseIcon from "../../assets/comps/CloseIcon";
import { BackIcon } from "../../assets/svg";
import MainButton from "../../components/buttons/MainButton";
import InputField from "../../components/fields/InputField";
import useAuthModal from "./useAuthModal";

type Props = {
  close: () => void;
};

const ForgotPassword = ({ close }: Props) => {
  const { returnFromForgotPswdModal } = useAuthModal();
  const handleInputField = () => {};
  return (
    <div className="flex flex-col gap-4 p-4 px-4">
      <header className="flex flex-col gap-3 border-light_border_color border-b-[1px] pb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Forgot Password</h1>
          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <p className="text-sm sm:text-base font-light max-w-[400px] text-main_bg">
          {"We'll send a password reset link to your email."}
        </p>
      </header>

      <section className="flex flex-col gap-6 my-4">
        <InputField
          id="email"
          type="email"
          title="Email"
          value={""}
          handleChange={handleInputField}
          isOutlined
        />

        <div className="w-full flex justify-center my-2">
          <MainButton className="text-sm py-2">
            {"Send Password reset link"}
          </MainButton>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <button
          className="flex items-center"
          onClick={returnFromForgotPswdModal}
        >
          <img src={BackIcon} alt="back" className="w-10 h-10" />
          <p>Back to Login</p>
        </button>
      </section>
    </div>
  );
};

export default ForgotPassword;
