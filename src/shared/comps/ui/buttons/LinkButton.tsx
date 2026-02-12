import { LinkIcon } from "../../../../assets/svg";

export type LinkButtonType = {
  text: string;
  handleLink: () => void;
};

const LinkButton = ({ text }: LinkButtonType) => {
  return (
    <button className="text-main_bg">
      <p className="text-sm md:text-base">
        {text}
        <span>{<img src={LinkIcon} className="inline p-1" />}</span>
      </p>
    </button>
    // <TextWithIcon
    //   text={text}
    //   image={LinkIcon}
    //   width={8}
    //   height={8}
    //   onClick={handleLink}
    //   flexPositions="items-start justify-start"
    // />
  );
};

export default LinkButton;
