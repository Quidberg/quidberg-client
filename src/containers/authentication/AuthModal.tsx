import { useAppSelector } from "../../app/hooks/regHook";
import { selectAuthRegType, selectIsForgotPswd } from "../../app/slices/auth/authSlice";

import { Modal } from "../../components/modal";
import AuthContainer from "./AuthContainer";
import ForgotPassword from "./ForgotPassword";

interface Props {
  isOpen: boolean;
  close: () => void;
  // authType: "signin" | "signup" | "login" | null
}

const AuthModal = ({ isOpen, close, }: Props) => {
  const authType = useAppSelector(selectAuthRegType);
  const isForgotPswd = useAppSelector(selectIsForgotPswd);

  return (
    <Modal isOpen={isOpen} close={close} >
      {isForgotPswd ? <ForgotPassword close={close}/> : <AuthContainer authType={authType} close={close}/>}
    </Modal>
  );
};

export default AuthModal;
