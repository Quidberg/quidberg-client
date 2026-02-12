import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAppRoutes, AppRoutes, PRF } from "./AppRoutes";
import Registration from "../app/client/pages/client/oracle/Registration";
import Oracle from "../app/client/pages/client/oracle/Oracle";
import Dashboard from "../app/client/pages/client/dashboard/Dashboard";
import AppLayout from "../app/client/containers/layouts/AppLayout";
import ClassesAndTutorials from "../app/client/pages/client/classesAndTutorials/ClassesAndTutorials";
import ExaminationSimulator from "../app/client/pages/client/examination/ExaminationSimulator";
import Subscription from "../app/client/pages/client/subscription/Subscription";
import Settings from "../app/client/pages/client/settings/Settings";
import OracleProtectedRoute from "./protectedRoutes/OracleProtectedRoute";
import Authentication from "../app/client/pages/client/authentication/Authentication";
import LandingPage from "../app/client/pages/client/landingPage/LandingPage";
import Pricing from "../app/client/pages/client/pricing/Pricing";
import AdminDashboard from "../app/admin/pages/dashboard/AdminDashboard";
import { GuestGuard } from "./guards/GuestGuard";
import { AdminGuestGuard } from "./guards/AdminGuestGuard";
// import { AdminAuthGuard } from "./guards/AdminAuthGuard";
import ErrorPage from "../app/client/pages/shared/ErrorPage";
import ExploreClassesPage from "../app/client/pages/client/classesAndTutorials/classes/ExploreClassesPage";
// import ClassPage from "../pages/client/classesAndTutorials/classes/ClassPage";
import ExploreTutorialsPage from "../app/client/pages/client/classesAndTutorials/tutorials/ExploreTutorialsPage";
import TutorialPage from "../app/client/pages/client/classesAndTutorials/tutorials/TutorialPage";
import ExploreSolutionsPage from "../app/client/pages/client/classesAndTutorials/solutions/ExploreSolutionsPage";
import SolutionPage from "../app/client/pages/client/classesAndTutorials/solutions/SolutionPage";
import StartExam from "../app/client/pages/client/examination/StartExam";
import ExamInstructions from "../app/client/pages/client/examination/ExamInstructions";
import ClassLayout from "../app/client/pages/client/classesAndTutorials/classes/ClassLayout";
import { Providers } from "../shared/providers";
import AdminLayout from "../app/admin/containers/layout/AdminLayout";
import AdminAuth from "../app/admin/pages/auth/AdminAuth";
import AdminLearning from "../app/admin/pages/learning/AdminLearning";
import AdminOracle from "../app/admin/pages/oracle/AdminOracle";
import LearningId from "../app/admin/pages/learning/LearningId";

const RoutesSwitches = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Providers />}>
          <Route
            path={AppRoutes.landingPage.index}
            element={<LandingPage />}
          />

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

          {/* <Route element={<AdminAuthGuard />}> */}
          <Route element={<AdminLayout />}>
            <Route
              path={AppRoutes.dashboard.admin}
              element={<AdminDashboard />}
            />
            <Route path={AdminAppRoutes.learning.index}>
              <Route path={""} element={<AdminLearning />} />
              <Route path={"create"} element={<LearningId />} />
              <Route path={"edit/:id"} element={<LearningId />} />
            </Route>
            <Route
              path={AdminAppRoutes.oracle.index}
              element={<AdminOracle />}
            />
          </Route>
          {/* </Route> */}

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
              path={AppRoutes.classesAndResources.learning}
              element={<ClassesAndTutorials />}
            />

            <Route path={AppRoutes.classesAndResources.classes}>
              <Route path="" element={<ExploreClassesPage />} />
              <Route path=":id" element={<ClassLayout />} />
            </Route>

            <Route path={AppRoutes.classesAndResources.tutorials}>
              <Route path="" element={<ExploreTutorialsPage />} />
              <Route path=":id" element={<TutorialPage />} />
            </Route>

            <Route path={AppRoutes.classesAndResources.solutions}>
              <Route path="" element={<ExploreSolutionsPage />} />
              <Route path=":id" element={<SolutionPage />} />
            </Route>

            <Route path={AppRoutes.examinationSimulator.index}>
              <Route path={""} element={<ExaminationSimulator />} />
              <Route path=":exam/:id/start" element={<StartExam />} />
              <Route
                path=":exam/:id/instructions"
                element={<ExamInstructions />}
              />
            </Route>
            <Route
              path={AppRoutes.subscription.index}
              element={<Subscription />}
            />
            <Route
              path={AppRoutes.pricing.index}
              element={<Pricing />}
            />
            <Route
              path={AppRoutes.settings.index}
              element={<Settings />}
            />
            <Route
              path={AppRoutes.dashboard.index}
              element={<Dashboard />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitches;
