import RightArrow from "../../assets/comps/RightArrow";
import FormCard from "../../components/cards/FormCard";
import { capitalize } from "../../utils/utilFunction";

type ExploreClassesPropType = {
  popularSubjects: { name: string; id: string }[];
};

const ExploreClasses = ({ popularSubjects }: ExploreClassesPropType) => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      <h1 className="font-semibold text-lg md:text-xl xl:text-4xl">
        Explore Our Catalog
      </h1>
      <section className=" flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="md:text-lg">Popular Categories</p>
          <button className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-main_bg">
            <p>View all Subjects</p>
            <div className="w-3 aspect-square flex items-center">
              <RightArrow color={"#1DA1F2"} />
            </div>
          </button>
        </div>

        
        <div className="w-full grid grid-cols-2 sm:flex gap-4 overflow-x-scroll">
          {popularSubjects.map((sub) => (
            <FormCard
              key={sub?.id}
              className="flex flex-col justify-between sm:w-[10rem] xl:w-[15rem] aspect-[2.3]"
            >
              <div className="">
                <p className="text-sm truncate ellipsis">
                  {capitalize(sub?.name)}
                </p>
              </div>
            </FormCard>
          ))}
        </div>

        <button className="text-sm px-2 py-1 sm:hidden border-[1.5px] border-main_bg/60 text-main_bg">
          View All Subjects
        </button>
      </section>
    </div>
  );
};

export default ExploreClasses;
