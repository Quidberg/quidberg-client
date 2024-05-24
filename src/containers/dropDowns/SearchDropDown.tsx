import SearchField from "../../components/fields/SearchField";
import { Fragment, 
  // ReactElement 
} from "react";
import { 
  // Dialog, Menu, 
  Transition } from "@headlessui/react";
import OutlineButton from "../../components/buttons/OutlineButton";
import SearchResultContainer from "../searchResults/SearchResultContainer";
import { searchResults, tagData, topSearches } from "../../utils/dummyData";
// import { useListenForOutsideClicks } from "../../shared/hooks/listenForOutsideClicks";

type SearchDropDownPropTypes = {
  isOpen: boolean;
  dialogClassName?: string;
  handleClose: () => void;
  showSearchResults: () => void;
};

const SearchDropDown = ({
  isOpen,
  dialogClassName,
  handleClose,
  showSearchResults,
}: SearchDropDownPropTypes) => {
  const handleSearchSubmit = () => {};

  const handleSearchTag = () => {};

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <div className="absolute top-[100%] left-0 w-full pb-4 z-drop_down_menu">
        {/* overlay */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute h-screen inset-0 bg-[rgba(0,0,0,0.80)]  transition-opacity"
            onClick={() => {
              handleClose();
            }}
          />
        </Transition.Child>

        {/* main Dialog container */}
        <div className="relative overflow-y-auto">
          <div className="flex text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-y-screen"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              {/* main modal panel */}
              <div
                className={`relative transform overflow-hidden flex flex-col items-center h-[600px] py-2 md:p-4 bg-drop_down_bg text-left shadow-xl transition-all w-full  ${
                  dialogClassName ? dialogClassName : ""
                }`}
              >
                {/* MAIN CONTENT IN MODAL */}
                <main className="w-full flex-1 flex flex-col gap-4 items-center">
                  {/* SEARCH BOX */}

                  <section className="w-[90%] md:w-[80%]">
                    <SearchField
                      placeholder="What are you searching for?"
                      handleSubmit={handleSearchSubmit}
                    />
                  </section>

                  {/* SEARCH LISTS */}
                  <section className="w-[90%] md:w-[80%] md:pl-6">
                    <SearchResultContainer
                      searchResults={searchResults}
                      tags={tagData}
                      topSearches={topSearches}
                      handleSearchTag={handleSearchTag}
                    />
                  </section>
                </main>

                {/* SEARCH RESULTS BUTTON */}
                <OutlineButton
                  onClick={showSearchResults}
                  color="#000000"
                  borderColor="#E2E1E1"
                  className="font-semibold"
                >
                  View Search Results
                </OutlineButton>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

export default SearchDropDown;
