import React, { memo, useState } from "react";
import { ArrowDown } from "../../../assets/svg";
import { DropDownFieldType } from "../../../shared/types/FieldTypes";
import { DropListType } from "../../../shared/types/RegistrationDataTypes";
import { useListenForOutsideClicks } from "../../../shared/hooks/listenForOutsideClicks";
import WarningText from "../info/WarningText";
import InfoButton from "../buttons/InfoButton";
import InfoModal from "../../containers/modals/infoModal/InfoModal";
import { cn } from "../../../utils";

const FieldWithArrowDown = memo(
  ({
    placeholder,
    title,
    list,
    className,
    handleListClick,
    id,
    value,
    dropDownText,
    handleFilterList,
    fieldName,
    error,
    handleDropDownClick,
    isSearchLocked,
    isDropDownLocked,
    isIdle,
    infoModalContent,
    titleClassName,
  }: DropDownFieldType) => {
    const [isFieldFocus, setisFieldFocus] = useState(false);
    const [text, setText] = useState<string>("");
    // const [arr, setArr] = useState(list);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const { dropdownRef } = useListenForOutsideClicks(() => {
      setisFieldFocus(false);
    }, isFieldFocus);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = e.target.value;
      setText(value);
      if (handleFilterList) handleFilterList({ text: value, id });
    };

    const handleListAction = (item: DropListType) => {
      handleListClick({ item, id });
    };

    const handleDropDown = () => {
      // if (isDropDownLocked) return
      if (handleDropDownClick) handleDropDownClick(id);
      setisFieldFocus(!isFieldFocus);
    };

    const handleInfoButton = () => {
      setShowInfoModal(true);
    };

    const closeInfoModal = () => {
      setShowInfoModal(false);
    };

    return (
      <div className=" relative w-full flex flex-col justify-between items-center">
        <InfoModal close={closeInfoModal} isOpen={showInfoModal}>
          <div>
            <p>{infoModalContent}</p>
          </div>
        </InfoModal>
        <div className="w-full ">
          {title && (
            <header>
              <InfoButton
                textClassName={` ${
                  titleClassName ? titleClassName : "font-semibold"
                }`}
                onClick={handleInfoButton}
              >
                {title}
              </InfoButton>
            </header>
          )}

          {/* INPUT FIELD */}
          <section className="relative w-full" ref={dropdownRef}>
            {/* ARROW DOWN FIELD WITH ERROR MSG */}
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className={cn(
                  `   relative flex w-full items-center text-start justify-between  ${
                    (isFieldFocus || value) && !error && !isIdle
                      ? "border-border_focus_color border-b-2"
                      : "border-border_color border-b-border_width"
                  } ${error ? "border-warning_red ahashakeheartache" : ""}
                
                `,
                  (isDropDownLocked || isIdle) && "cursor-text"
                )}
                onClick={handleDropDown}
              >
                <p
                  className={cn(
                    `text-sm ${
                      value ? "text-main_font" : "text-light_font "
                    } w-full bg-[inherit] capitalize pl-3 truncate text-ellipsis overflow-x-hidden `,
                    className
                  )}
                >
                  {value ? value : dropDownText}
                </p>

                {!isDropDownLocked && !isIdle && <img src={ArrowDown} />}
              </button>
              {typeof error !== "string"
                ? error?.map((error) => (
                    <WarningText key={error.type} text={error.message} />
                  ))
                : null}
            </div>

            {/* DROP DOWN LIST */}
            {isFieldFocus && !isDropDownLocked && !isIdle && (
              <div
                id={"drop-down-list"}
                className="flex flex-col gap-3 w-full absolute top-full bg-light_pry_bg shadow-sm p-2 z-20"
              >
                {/* SEARCH */}
                {!isSearchLocked && (
                  <input
                    className={cn(
                      `w-full bg-[inherit] border-[2px] border-light_font capitalize pl-3 placeholder:text-sm`,
                      className
                    )}
                    type="text"
                    placeholder={placeholder}
                    onFocus={() => setisFieldFocus(true)}
                    onChange={handleChange}
                    value={text}
                    autoFocus={true}
                    name={fieldName}
                  />
                )}
                <section className="max-h-[300px] overflow-y-scroll">
                  {list?.length ? (
                    list?.map((item, index) => (
                      <button
                        className={`p-1 text-left w-full capitalize ${
                          index < list.length - 1 ? "border-b-[0.8px]" : ""
                        } border-light_border_color hover:bg-main_bg/20`}
                        key={item?.id}
                        onClick={() => {
                          handleListAction(item);
                          setisFieldFocus(false);
                        }}
                      >
                        <p>{item?.name}</p>
                      </button>
                    ))
                  ) : (
                    <p>No Item on List</p>
                  )}
                </section>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
);

export default FieldWithArrowDown;
