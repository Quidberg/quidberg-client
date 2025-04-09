import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../../libs/api/user/user";
import { AppRoutes } from "../AppRoutes";


export const AuthGuard = () => {
  const location = useLocation();
  const redirectTo = location.pathname + location.search;

  const { user, loading } = useUser();

  if (loading) return null;

  if (user) {
    return <Outlet />;
  }

  return <Navigate replace to={`${AppRoutes.authentication.signin}?redirect=${redirectTo}`} />;
};
