import { ReactElement } from "react";
import CircularCheckIcon from "../../assets/comps/CircularCheckIcon";

type Props = {
  children: string | ReactElement;
};

const CheckText = ({ children }: Props) => {
  return (
    <table className="flex gap-2 items-start">
      <tbody className="flex items-start">
        <tr className="flex items-start">
          <td className="mt-0 ">
            <div className="w-4 h-4">
              <CircularCheckIcon />
            </div>
          </td>
          <td className="-mt-1">
            <p className="text-base font-light text-light_font ml-2">{children}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CheckText;
