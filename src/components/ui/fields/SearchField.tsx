import { useCallback, useState } from "react";
import SearchIcon from "../../../assets/comps/SearchIcon";
// import { CloseGreyIcon } from "../../assets/svg";
import CloseIcon from "../../../assets/comps/CloseIcon";

type SearchFieldPropTypes = {
  placeholder: string;
  handleSubmit: () => void;
  isTopNavSearch?: boolean; // Check if the search bar is on the top bar to apply styles
  isColored?: boolean;
  fieldName?: string;
};

const SearchField = ({
  placeholder,
  // isTopNavSearch,
  // handleSubmit,
  isColored,
  fieldName,
}: SearchFieldPropTypes) => {
  // const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchedVal = e.target.value.trim();
      setSearchText(searchedVal);
    },
    [searchText]
  );

  const handleSubmitSearch = () => {
    // DO STH WITH THE SEARCH
  };

  const handleFocus = () => {};
  return (
    <div
      className={`flex flex-row justify-between h-[2.8rem]  w-full ${
        isColored
          ? "border-main_bg  border-[2px] rounded-sm"
          : "border-light_border_color  border-[0.3px]"
      } bg-light_input_bg`}
    >
      <button
        className={`${isColored ? "bg-main_bg" : ""} h-[100%] aspect-square`}
        onClick={handleSubmitSearch}
      >
        <SearchIcon color={`${isColored ? "#FFFFFF" : "#858181"}`} />
      </button>
      <input
        placeholder={placeholder}
        onChange={handleChange}
        className={`p-2 w-full text-base placeholder:text-xs md:placeholder:text-sm placeholder:italic truncate text-ellipsis border-r-[0.3px] border-light_border_color`}
        onSubmit={handleSubmitSearch}
        onFocus={handleFocus}
        type="text"
        autoFocus
        id="search"
        value={searchText}
        name={fieldName}
      />
      <button className="flex items-center justify-center h-full aspect-square p-2">
        <div className="w-5 h-5">
          <CloseIcon color="#858181" />
        </div>
      </button>
    </div>
  );
};

export default SearchField;
