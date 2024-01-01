import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes, PRF } from "./AppRoutes";
import Registration from "../screens/oracle/Registration";
import Oracle from "../screens/oracle/Oracle";
import Dashboard from "../screens/dashboard/Dashboard";
import AppLayout from "../containers/layouts/AppLayout";
import ClassesAndTutorials from "../screens/classesAndTutorials/ClassesAndTutorials";
import ExaminationSimulator from "../screens/examination/ExaminationSimulator";
import Subscription from "../screens/subscription/Subscription";
import Settings from "../screens/settings/Settings";
import OracleProtectedRoute from "./protectedRoutes/OracleProtectedRoute";
import Authentication from "../screens/authentication/Authentication";
import LandingPage from "../screens/landingPage/LandingPage";

const RoutesSwitches = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={AppRoutes.landingPage.index} element={<LandingPage/>}/>

        {/* AUTH ROUTES */}
        <Route path={AppRoutes.authentication.signin} element={<Authentication/>}/>
        <Route path={AppRoutes.authentication.signup} element={<Authentication/>}/>
        <Route path={AppRoutes.authentication.login} element={<Authentication/>}/>

        <Route path={PRF} element={<AppLayout />}>
          <Route
            path={AppRoutes.statistics.registration.setup}
            element={<Registration />}
          />
          
          <Route
            path={AppRoutes.statistics.analysis}
            element={<OracleProtectedRoute><Oracle /></OracleProtectedRoute>}
          />
          <Route
            path={AppRoutes.classesAndResources.classes}
            element={<ClassesAndTutorials />}
          />

          <Route
            path={AppRoutes.examination.index}
            element={<ExaminationSimulator />}
          />
          <Route
            path={AppRoutes.subscription.index}
            element={<Subscription />}
          />
          <Route path={AppRoutes.settings.index} element={<Settings />} />
          <Route path={AppRoutes.dashboard.index} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitches;
