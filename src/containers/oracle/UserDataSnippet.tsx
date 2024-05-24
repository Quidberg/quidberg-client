import { Disclosure } from "@headlessui/react";
import EditButton from "../../components/buttons/EditButton";
import FormCard from "../../components/cards/FormCard";
// import LinkButton from "../../components/buttons/LinkButton";
import ViewMore from "../../components/toggleview/ViewMore";
import KeyValCard, { KeyValPropType } from "../../components/cards/KeyValCard";


type UserDataSnippetType = {
  keyVal: KeyValPropType[];
  isShown: boolean;
  handleViewSnippet: () => void;
};

const showIconAndText = (isShown: boolean, handleView: () => void) => {
  return <ViewMore isShown={isShown} handleView={handleView} />;
};



const UserDataSnippet = ({
  keyVal,
  isShown,
  handleViewSnippet,
}: UserDataSnippetType) => {
  const school = keyVal.find((kv) => kv.name === "university")?.value;
  const course = keyVal.find((kv) => kv.name === "course")?.value;

  return (
    <div className="flex flex-col gap-2">
      <header>
        <h1 className="font-main_header_weight text-base">{"Details you provided."} <span className="text-light_font font-light">{"(Click show to edit your entries)"}</span></h1>
      </header>

    <Disclosure>
      <FormCard className="max-w-[600px]">
        <div className="w-full flex justify-between  mb-6 font-normal">
          {showIconAndText(isShown, handleViewSnippet)}
          <EditButton text={"Edit"} />
        </div>

        {isShown ? (
          <>
          {/* FULL VIEW */}
            <section className="flex flex-col gap-2 w-full">
              {keyVal?.map(({ name, value, isChange }) => (
                <KeyValCard
                  name={name}
                  value={value}
                  key={name}
                  isChange={isChange}
                />
              ))}
            </section>
{/* 
            <section className="flex justify-center mt-9">
              <LinkButton
                text={`Read about ${capitalize(course)} in ${school}`}
                handleLink={() => {}}
              />
            </section> */}
          </>
        ) : (
          <>
          {/* COLLAPSED VIEW */}
            <section className="flex gap-3 items-center justify-center">
              <button className="capitalize text-main_bg">{school}</button>
              <div className="h-6 w-[1px] bg-subtitle_color"></div>
              <button className="capitalize text-main_bg">{course}</button>
            </section>
          </>
        )}
      </FormCard>
    </Disclosure>
    </div>
  );
};

export default UserDataSnippet;
