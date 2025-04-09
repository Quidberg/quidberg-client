import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import InputField from "../../../../components/fields/InputField";
import { memo, useState } from "react";
import { numToCurrency } from "../../../../../utils/utilFunction";

const TuitionFilter = () => {
  const edgeVals = { min: 0, max: 10000000 };
  const [val, setVal] = useState([0, 10000000]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputVal = Number(e.target.value);
  //   const id = e.target.id;
  //   console.log(inputVal);
  //   if (id === "min_tuition") {
  //     setVal([inputVal, val[1]]);
  //   } else {
  //     setVal([val[0], inputVal]);
  //   }
  // };
  return (
    <div className="flex flex-col gap-1">
      <h3>Tuition Range</h3>
    

      <section className="flex flex-col gap-1">
        <div className="flex justify-between w-full text-light_font text-sm">
          <p>Min</p>
          <p>Max</p>
        </div>
        <RangeSlider
          min={edgeVals["min"]}
          max={edgeVals["max"]}
          id={"range-slider"}
          value={val}
          className={``}
          onInput={setVal}
          step={1000}
        />
        <div className="flex justify-between w-full text-light_font text-sm">
          <p>{numToCurrency({value:val[0], currency:"NGN"})}</p>
          <p>{numToCurrency({value:val[1], currency:"NGN"})}</p>
        </div>
      </section>

      {/* <section className="flex flex-col gap-2 mt-3">
        <div className="flex gap-2">
          <p>Min</p>
          <InputField
            id="min_tuition"
            value={ numToCurrency({value:val[0], currency:'NGN'})}
            handleChange={handleChange}
            
            // leftIcon={}
          />
        </div>

        <div className="flex gap-2">
          <p>Max</p>
          <InputField
            id="max_tuition"
            value={ numToCurrency({value:val[1], currency:'NGN'})}
            handleChange={handleChange}
            
          />
        </div>
      </section> */}
    </div>
  );
};

const memoizedTuitionFilter = memo(TuitionFilter);

export default memoizedTuitionFilter;
