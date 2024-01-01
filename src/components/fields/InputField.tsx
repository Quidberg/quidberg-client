import { memo, useState } from "react";
import { InputFieldPropsType } from "../../shared/types/FieldTypes";
import WarningText from "../info/WarningText";
import InfoModal from "../../containers/modals/infoModal/InfoModal";

const InputField = memo(
  ({
    placeholder,
    title,
    className,
    type,
    id,
    value,
    handleChange,
    error,
    isIdle,
    isOutlined,
    infoModalContent,
    leftIcon: LeftIcon,
    ...props
  }: InputFieldPropsType) => {
    const [isBorderFocus, setIsBorderFocus] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const closeInfoModal = () => {
      setShowInfoModal(false);
    };

    return (
      <div className={`${className} relative flex flex-col justify-between`}>
        <InfoModal close={closeInfoModal} isOpen={showInfoModal}>
          <div>
            <p>{infoModalContent}</p>
          </div>
        </InfoModal>

        {title && (
          <header>
            <h2 className="xl:font-semibold text-base">{title}</h2>
          </header>
        )}

        {/* INPUT FIELD */}
        <section className="relative  flex flex-col gap-2">
          <div
            className={`relative flex w-full justify-between py-1 ${isOutlined ? "border-border_width" :""} pl-2 gap-1 ${
              (isBorderFocus || value) && !error && !isIdle
                ? "border-border_focus_color border-b-2"
                : "border-border_color border-b-border_width "
            } ${error ? "border-warning_red ahashakeheartache" : ""}`}
          >
            {LeftIcon && <div>{LeftIcon}</div>}
            <input
              name={id}
              id={id}
              className={`${className} bg-[inherit] w-full`}
              type={`${type ? type : "text"}`}
              placeholder={placeholder}
              onChange={isIdle ? () => {} : handleChange}
              onFocus={() => setIsBorderFocus(true)}
              onBlur={() => setIsBorderFocus(false)}
              value={value}
              disabled={isIdle}
              {
                ...props
              }
            />
          </div>
          {typeof error !== "string"
            ? error?.map((err) => (
                <WarningText text={err.message} key={err.type} />
              ))
            : null}
        </section>
      </div>
    );
  }
);

export default InputField;
