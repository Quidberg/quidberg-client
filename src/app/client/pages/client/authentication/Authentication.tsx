import { useAppSelector } from "../../../store/hooks/regHook";
import { selectAuthRegType } from "../../../store/slices/auth/authSlice";
import AuthenticationForm from "../../../containers/authentication/AuthenticationForm";

const Authentication = () => {
  const selectAuthType = useAppSelector(selectAuthRegType);

  return (
    <div className="">
      <section className=""></section>
      <section>
        <AuthenticationForm authType={selectAuthType} />
      </section>
    </div>
  );
};

export default Authentication;
