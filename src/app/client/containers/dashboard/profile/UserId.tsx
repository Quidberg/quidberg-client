import { cn } from "../../../../../shared/utils";

export type UserIdPropType = {
  fullName: string;
  // userName: string;
  dateJoined: string;
  pic: string;
};

const UserId = ({ fullName, dateJoined, pic }: UserIdPropType) => {
  return (
    <div className="flex gap-3">
      {/* <ProfilePic
        src={pic}
        className="h-20 sm:h-[8rem] xl:h-[10rem]"
      /> */}

      {/* INFO */}
      <section className="flex flex-col justify-between gap-3 text-[0.9rem] sm:text-base">
        <div className="flex flex-col">
          <p className="font-semibold text-lg">{`Hi, ${fullName}!`}</p>
          {/* <p className='font-light text-xs sm:text-sm text-light_font'>{userName}</p> */}
        </div>

        {/* DATE JOINED */}
        <p className="text-xs sm:text-sm text-light_font">
          {`Joined ${dateJoined}`}
        </p>
      </section>
    </div>
  );
};

export default UserId;

type ProfilePicProp = {
  src: string;
  className?: string;
};
export const ProfilePic = ({
  src,
  className,
  ...props
}: ProfilePicProp) => {
  return (
    <section
      className={cn(
        `h-20 aspect-square sm:h-[8rem] xl:h-[10rem] rounded-[40%] bg-light_gray_bg `,
        className && className
      )}
    >
      <img src={src} alt="avatar" {...props} />
    </section>
  );
};
