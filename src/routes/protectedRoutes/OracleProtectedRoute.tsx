import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRoutes } from "../AppRoutes";
import { useAppSelector } from "../../app/hooks/regHook";
import { selectIsRegSubmitted } from "../../app/slices/oracleRegistration/registrationSlice";

type Props = {
  children: ReactElement;
};

const OracleProtectedRoute = ({ children }: Props) => {
  // const isRegSubmitted = useAppSelector(selectIsRegSubmitted)
  const isRegSubmitted = true;
  let location = useLocation();

  if (!isRegSubmitted) {
    return (
      <Navigate
        to={AppRoutes.statistics.registration.setup}
        state={{ from: location }}
        replace
      />
    );
  }
  return children;
};

export default OracleProtectedRoute;
