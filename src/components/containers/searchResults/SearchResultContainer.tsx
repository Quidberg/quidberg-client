import {
  SearchResultsType,
  TagType,
} from "../../../shared/types/ComponentTypes";
import SearchTag from "./SearchTag";
import SearchCard from "./SearchCard";

type SearchResultContainerPropType = {
  searchResults: SearchResultsType[];
  tags: TagType[];
  topSearches: SearchResultsType[];
  handleSearchTag: () => void;
};

const SearchResultContainer = ({
  // searchResults,
  tags,
  topSearches,
  handleSearchTag,
}: SearchResultContainerPropType) => {
  return (
    <div className="flex flex-col gap-6">
      {/* TAGS */}
      <section className="flex flex-col gap-2">
        <h1 className="text-base">Recent search results</h1>
        <div className="flex gap-2 flex-wrap">
          {tags.slice(0, 6).map(({ text }) => (
            <SearchTag
              key={text}
              text={text}
              handleSearchTag={handleSearchTag}
            />
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="flex flex-col gap-3">
        <h1 className="text-base">Top Searches</h1>
        <div className="flex flex-col gap-3">
          {topSearches.map(({ pic, title, tag }) => (
            <SearchCard key={title} pic={pic} title={title} tag={tag} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchResultContainer;
