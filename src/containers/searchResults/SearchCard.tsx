import React from "react";
import { SearchResultsType } from "../../shared/types/ComponentTypes";


const SearchCard = ({ tag, title, pic }: SearchResultsType) => {
  return (
    <div className="flex gap-4">
      <div className="relative h-15 w-20 bg-light_gray_bg">
        <img src={pic} className="w-full h-full" />
      </div>

      <div className="flex flex-col gap-1">
        <p className="">{title}</p>
        <div className="flex gap-1">

        {tag.map(text=><p className="p-1 w-fit text-light_gray_bg text-xs" key={text}>{text}</p>)}
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
