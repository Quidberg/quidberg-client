import FormCard from "../../ui/cards/FormCard";

const Charts = () => {
  return (
    <div className="flex flex-col items-start justify-center ">
      <div className="w-full flex justify-start py-3 font-main_header_weight text-base">
        <h1>Charts showing cut-off </h1>
      </div>

      <div className="grid grid-cols-2 md:w-[80%] gap-3">
        <FormCard className="flex flex-col items-center justify-center w-full aspect-square italic text-light_font">
          <p>Charts would be displayed here</p>
        </FormCard>
        <FormCard className="flex flex-col items-center justify-center w-full aspect-square italic text-light_font">
          <p>Charts would be displayed here</p>
        </FormCard>
      </div>
    </div>
  );
};

export default Charts;
