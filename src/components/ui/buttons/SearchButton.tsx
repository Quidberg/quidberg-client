import SearchIcon from "../../../assets/comps/SearchIcon";

type SearchButtonPropTypes = {
  placeholder: string;
  handleSearch: () => void;
};

const SearchButton = ({ placeholder, handleSearch }: SearchButtonPropTypes) => {
  return (
    <button
      className={`flex flex-row gap-1 justify-between items-center h-fit  flex-1 max-w-[600px] border-none md:border-solid md:border-b-[0.3px] md:border-light_border_color bg-[#f9fafb] p-1 px-3 rounded-md`}
      onClick={handleSearch}
    >
      <div className={`w-full hidden md:flex`}>
        <p className=" p-1 w-full text-sm truncate text-ellipsis text-light_gray_bg">
          {placeholder}
        </p>
      </div>
      <div className="w-5 aspect-square">
        <SearchIcon color="#858181" />
      </div>
    </button>
  );
};

export default SearchButton;
