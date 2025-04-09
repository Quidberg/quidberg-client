
type SearchTagPropTypes = {
  text: string;
  handleSearchTag: () => void;
};

const SearchTag = ({ text, handleSearchTag }: SearchTagPropTypes) => {
  return <button className="py-1 px-3 w-fit text-xs md:text-sm rounded-full bg-main_bg text-main_button_color" onClick={handleSearchTag}>{text}</button>;
};

export default SearchTag;
