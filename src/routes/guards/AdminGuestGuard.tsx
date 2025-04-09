import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/regHook";
import { selectUser } from "../../app/slices/auth/authSlice";
import { AppRoutes } from "../AppRoutes";


export const AdminGuestGuard = () => {
  const isLoggedIn = Boolean(useAppSelector(selectUser));

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") ?? AppRoutes.dashboard.admin;

  if (isLoggedIn) {
    return <Navigate to={redirect} />;
  }

  return <Outlet />;
};
