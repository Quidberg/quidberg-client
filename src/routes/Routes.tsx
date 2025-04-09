import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes, PRF } from "./AppRoutes";
import Registration from "../pages/client/oracle/Registration";
import Oracle from "../pages/client/oracle/Oracle";
import Dashboard from "../pages/client/dashboard/Dashboard";
import AppLayout from "../components/containers/layouts/AppLayout";
import ClassesAndTutorials from "../pages/client/classesAndTutorials/ClassesAndTutorials";
import ExaminationSimulator from "../pages/client/examination/ExaminationSimulator";
import Subscription from "../pages/client/subscription/Subscription";
import Settings from "../pages/client/settings/Settings";
import OracleProtectedRoute from "./protectedRoutes/OracleProtectedRoute";
import Authentication from "../pages/client/authentication/Authentication";
import LandingPage from "../pages/client/landingPage/LandingPage";
import Pricing from "../pages/client/pricing/Pricing";
import AdminAuth from "../pages/admin/auth/AdminAuth";
import { Providers } from "../providers";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import { GuestGuard } from "./guards/GuestGuard";
import { AdminGuestGuard } from "./guards/AdminGuestGuard";
import { AdminAuthGuard } from "./guards/AdminAuthGuard";

const RoutesSwitches = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Providers />}>
          <Route path={AppRoutes.landingPage.index} element={<LandingPage />} />

          {/* AUTH ROUTES */}
          <Route element={<GuestGuard />}>
            <Route
              path={AppRoutes.authentication.signin}
              element={<Authentication />}
            />
            <Route
              path={AppRoutes.authentication.signup}
              element={<Authentication />}
            />
            <Route
              path={AppRoutes.authentication.login}
              element={<Authentication />}
            />
          </Route>

          <Route element={<AdminGuestGuard />}>
            <Route
              path={AppRoutes.authentication.adminSignIn}
              element={<AdminAuth />}
            />
          </Route>

          <Route element={<AdminAuthGuard />}>
            <Route
              path={AppRoutes.dashboard.admin}
              element={<AdminDashboard />}
            />
          </Route>

          <Route path={PRF} element={<AppLayout />}>
            <Route
              path={AppRoutes.statistics.registration.setup}
              element={<Registration />}
            />

            <Route
              path={AppRoutes.statistics.analysis}
              element={
                <OracleProtectedRoute>
                  <Oracle />
                </OracleProtectedRoute>
              }
            />
            <Route
              path={AppRoutes.classesAndResources.classes}
              element={<ClassesAndTutorials />}
            />

            <Route
              path={AppRoutes.examinationSimulator.index}
              element={<ExaminationSimulator />}
            />
            <Route
              path={AppRoutes.subscription.index}
              element={<Subscription />}
            />
            <Route path={AppRoutes.pricing.index} element={<Pricing />} />
            <Route path={AppRoutes.settings.index} element={<Settings />} />
            <Route path={AppRoutes.dashboard.index} element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitches;
