// KEY VALUE PAIR COMPONENT i.e University : Quidberg Schools

import { Edit } from "../../assets/svg";
import { capitalize } from "../../utils/utilFunction";
import TextWithIcon from "../styledTexts/TextWithIcon";

export type KeyValPropType = {
  name: string;
  value: string | Array<string>;
  isChange?: boolean | string;
};

const KeyValCard = ({ name, value, isChange }: KeyValPropType) => {
  return (
    <div className="flex gap-2 xl:gap-6">
      <p className="font-medium whitespace-nowrap">{`${capitalize(name)}:`}</p>
      {
        <div className="flex flex-1 items-center justify-start gap-3 w-[50px] max-w-fit">
          <div className="w-full flex gap-1 text-main_bg overflow-clip">
            {typeof value === "string" ? (
              <p className=" capitalize truncate text-ellipsis font-normal">
                {capitalize(value)}
              </p>
            ) : (
              <div className="flex items-center overflow-x-hidden gap-1 ">
                {value.map((val, i) => (
                  <div className="flex items-center " key={`${val}${i}`}>
                    <p className="">{val}</p>
                    <div
                      className={`h-4 w-[1px] bg-subtitle_color ml-1 ${
                        i === value?.length - 1 ? "hidden" : ""
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {isChange && (
            <div className="w-fit">
              <TextWithIcon text="" image={Edit} width={4} height={4} />
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default KeyValCard;
