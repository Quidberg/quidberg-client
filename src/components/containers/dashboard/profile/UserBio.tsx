import { classConverter } from "../../../../utils/utilFunction";

export type UserBioPropType = {
  grade: string | number;
  dept: string;
  bio?: string;
  subscription: string;
};

const UserBio = ({
  grade,
  dept,
  bio,
  subscription,
}: UserBioPropType) => {
  const { grade: schoolGrade, sec } = classConverter(grade);
  return (
    <div className="text-sm md:text-[0.9rem]">
      <section className="w-fit">
        <table className="border-spacing-x-4 border-spacing-y-1 md:border-spacing-y-3 table-auto border-separate -ml-4">
          <tbody className="">
            <tr className="">
              <td className="w-fit text-light_font">
                {" "}
                <p className="">{`Class | Grade`}</p>
              </td>
              <td className="">
                <div className="flex gap-3">
                  <p>
                    {`${sec}`}{" "}
                    <span className="text-light_border_color">|</span>{" "}
                    {`${schoolGrade}`}
                  </p>
                  <p className="text-main_bg/70">{dept}</p>
                </div>
              </td>
            </tr>

            <tr>
              <td className="w-fit text-light_font">
                {" "}
                <p className="">{`Subscription`}</p>
              </td>
              <td className=" ">
                <div className="flex gap-1 text-gold bg-light_gold border-[0.8px] border-gold w-fit p-[0.1rem] px-2">
                  {subscription}
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-light_font flex flex-1 w-fit whitespace-nowrap">
                {" "}
                <p className="">{`Academic Goal`}</p>
              </td>
              <td className=" ">
                {" "}
                <div className="flex gap-1">{bio}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserBio;
