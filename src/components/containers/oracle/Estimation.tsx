// import EstimationBar from "../../ui/bars/EstimationBar";

// type Props = {
//   schoolName: string;
//   chances: number;
// };
const Estimation = () =>
  // { schoolName, chances }: Props
  {
    return (
      <div>
        <h3 className="font-main_header_weight text-light_font text-lg xl:text-xl">
          {"3. Estimated chances"}
        </h3>
        <p>
          Your chances are based on past and predicted outcomes of
          results similar to yours
        </p>

        <section>
          You chance of entry into
          <span className="w-full flex justify-center">
            <div className="max-w-[400px]">
              {/* <EstimationBar currentValue={70} /> */}
            </div>
          </span>
        </section>
      </div>
    );
  };

export default Estimation;
