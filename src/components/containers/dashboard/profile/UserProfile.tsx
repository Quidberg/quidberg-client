import UserId, { UserIdPropType } from "./UserId";
import EditButton from "../../../ui/buttons/EditButton";
import UserBio, { UserBioPropType } from "./UserBio";

type UserProfileType = {
  handleEditProfile: () => void;
};
type UserProfilePropType = UserIdPropType &
  UserProfileType &
  UserBioPropType;

const UserProfile = ({
  fullName,
  // userName,
  dateJoined,
  pic,
  handleEditProfile,
  grade,
  dept,
  bio,
  subscription,
}: UserProfilePropType) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <section className="flex justify-between items-start">
        <UserId
          fullName={fullName}
          // userName={userName}
          dateJoined={dateJoined}
          pic={pic}
        />
        <EditButton
          text="Edit Profile"
          handleEdit={handleEditProfile}
        />
      </section>
      <section className="md:ml-4">
        <UserBio
          grade={grade}
          dept={dept}
          bio={bio}
          subscription={subscription}
        />
      </section>
    </div>
  );
};

export default UserProfile;
