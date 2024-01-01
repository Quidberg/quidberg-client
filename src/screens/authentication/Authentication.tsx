import { useAppSelector } from "../../app/hooks/regHook"
import { selectAuthRegType } from "../../app/slices/auth/authSlice"
import AuthenticationForm from "../../containers/authentication/AuthenticationForm"

const Authentication = () => {
  const selectAuthType = useAppSelector(selectAuthRegType);

  return (
    <div className="">
      <section className="">

      </section>
      <section>

      <AuthenticationForm authType={selectAuthType} />
      </section>
   </div>
  )
}

export default Authentication