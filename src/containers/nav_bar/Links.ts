import { AppRoutes } from "../../routes/AppRoutes";
import DashboardIcon from "../../assets/comps/DashboardIcon";
import StatIcon from "../../assets/comps/StatIcon";
import TutorIcon from "../../assets/comps/TutorIcon";
import ExamIcon from "../../assets/comps/ExamIcon";
import SupportIcon from "../../assets/comps/SupportIcon";
import NewsIcon from "../../assets/comps/NewsIcon";
import SettingsIcon from "../../assets/comps/SettingsIcon";
import SubscriptionIcon from "../../assets/comps/SubscriptionIcon";

export type NavLinksPropsType = {
  name: string;
  link: string;
  alias: string;
  Icon: ({ color }: { color: string }) => JSX.Element;
  isActive: boolean;
};

export const navLinks:NavLinksPropsType[] = [
    
    {
      name: "Statistics and Analysis",
      alias: "Oracle",
      link: `${AppRoutes.statistics.analysis}`,
      isActive: false,
      Icon: StatIcon,
    },
    {
      name: "Classes and Resources",
      alias: "Classes",
      link: AppRoutes.classesAndResources.classes,
      isActive: false,
      Icon: TutorIcon,
    },
    {
      name: "Online Exams and Training",
      alias: "Exams",
      link: AppRoutes.examination.index,
      isActive: false,
      Icon: ExamIcon,
    },
    {
      name: "My Dashboard",
      alias: "Dashboard",
      link: AppRoutes.dashboard.index,
      isActive: false,
      Icon: DashboardIcon,
    },
    // { name: "Students Forum", link: "" },
    // {
    //   name: "Consultancy",
    //   alias: "Consultancy",
    //   link: "",
    //   isActive: false,
    //   Icon: SupportIcon,
    // },
    // {
    //   name: "School News",
    //   alias: "School News",
    //   link: "",
    //   isActive: false,
    //   Icon: NewsIcon,
    // },
    {
      name: "Subscriptions and Referrals",
      alias: "Subscriptions",
      link: AppRoutes.subscription.index,
      isActive: false,
      Icon: SubscriptionIcon,
    },
    {
      name: "Settings",
      alias: "Settings",
      link: AppRoutes.settings.index,
      isActive: false,
      Icon: SettingsIcon,
    },
  ];

//  [
//   { name: "My Dashboard", link: AppRoutes.dashboard.index },
//   {
//     name: "Statistics and Analysis",
//     link: `${AppRoutes.statistics.analysis}`,
//   },
//   { name: "Classes and Resources", link: "" },
//   { name: "Online Tests and Training", link: "" },
//   { name: "Students Forum", link: "" },
//   { name: "Consultancy", link: "" },
//   { name: "What's new?", link: "" },
//   { name: "Settings", link: "" },
//   { name: "Subscriptions and Referrals", link: "" },
//   { name: "Terms and Policies", link: "" },
// ];
