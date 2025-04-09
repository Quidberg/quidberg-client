import FormCard from "../../../ui/cards/FormCard";
import ActivityLink from "./ActivityLink";

type RecentActivityPropType = {
  activities: { type: string; title: string }[];
};

const RecentActivity = ({ activities }: RecentActivityPropType) => {
  return (
    <FormCard className="flex flex-col gap-3 max-h-[500px]">
      <h1 className="font-medium text-center text-light_font">
        Resume Activity
      </h1>
      <div className="flex flex-col gap-3 overflow-y-auto">
        {activities.map((activity) => (
          <ActivityLink
            type={activity?.type}
            link={activity?.title}
            key={activity?.title}
          />
        ))}
      </div>
    </FormCard>
  );
};

export default RecentActivity;
