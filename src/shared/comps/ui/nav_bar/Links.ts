import {
  AdminAppRoutes,
  AppRoutes,
} from "../../../../routes/AppRoutes";
import DashboardIcon from "../../../../assets/comps/DashboardIcon";
import StatIcon from "../../../../assets/comps/StatIcon";
import TutorIcon from "../../../../assets/comps/TutorIcon";
import ExamIcon from "../../../../assets/comps/ExamIcon";
// import SupportIcon from "../../../assets/comps/SupportIcon";
// import NewsIcon from "../../../assets/comps/NewsIcon";
import SettingsIcon from "../../../../assets/comps/SettingsIcon";
import SubscriptionIcon from "../../../../assets/comps/SubscriptionIcon";
import { NavLinksEnum } from "../../../utils/enums/LinksEnum";

export type NavLinksPropsType = {
  name: string;
  link: string;
  alias: string;
  Icon: ({ color }: { color: string }) => JSX.Element;
  isActive: boolean;
};

export const navLinks: NavLinksPropsType[] = [
  {
    name: "my-learning",
    alias: NavLinksEnum.dashboard,
    link: AppRoutes.dashboard.index,
    isActive: false,
    Icon: DashboardIcon,
  },

  {
    name: "explore-learning",
    alias: NavLinksEnum.classes,
    link: AppRoutes.classesAndResources.learning,
    isActive: false,
    Icon: TutorIcon,
  },
  {
    name: "examination-simulator",
    alias: NavLinksEnum.examinationSimulator,
    link: AppRoutes.examinationSimulator.index,
    isActive: false,
    Icon: ExamIcon,
  },

  {
    name: "oracle",
    alias: NavLinksEnum.oracle,
    link: `${AppRoutes.statistics.analysis}`,
    isActive: false,
    Icon: StatIcon,
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
    name: "subscription",
    alias: "Subscription",
    link: AppRoutes.subscription.index,
    isActive: false,
    Icon: SubscriptionIcon,
  },
  {
    name: "settings",
    alias: "Settings",
    link: AppRoutes.settings.index,
    isActive: false,
    Icon: SettingsIcon,
  },
];

export const adminNavLinks: NavLinksPropsType[] = [
  {
    name: "admint",
    alias: NavLinksEnum.adminDashboard,
    link: AdminAppRoutes.dashboard.index,
    isActive: false,
    Icon: DashboardIcon,
  },

  {
    name: "learning",
    alias: NavLinksEnum.adminLearning,
    link: AdminAppRoutes.learning.index,
    isActive: false,
    Icon: TutorIcon,
  },
  // {
  //   name: "examination-simulator",
  //   alias: NavLinksEnum.examinationSimulator,
  //   link: AppRoutes.examinationSimulator.index,
  //   isActive: false,
  //   Icon: ExamIcon,
  // },

  {
    name: "oracle",
    alias: NavLinksEnum.oracle,
    link: `${AdminAppRoutes.oracle.index}`,
    isActive: false,
    Icon: StatIcon,
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
  // {
  //   name: "subscription",
  //   alias: "Subscription",
  //   link: AppRoutes.subscription.index,
  //   isActive: false,
  //   Icon: SubscriptionIcon,
  // },
  // {
  //   name: "settings",
  //   alias: "Settings",
  //   link: AppRoutes.settings.index,
  //   isActive: false,
  //   Icon: SettingsIcon,
  // },
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
