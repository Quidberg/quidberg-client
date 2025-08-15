import GaugeComponent from "react-gauge-component";

type Props = {
  currentValue: number;
};

const EstimationBar = ({ currentValue }: Props) => {
  return (
    <div className="w-full">
      <GaugeComponent
        type="radial"
        arc={{
          colorArray: ["#EA4228", "#5BE12C"],
          padding: 0.02,
          subArcs: [{ length: 40 }, { length: 36 }, { length: 31 }],
        }}
        pointer={{ type: "arrow", animationDelay: 0, color: "#AEAEAE" }}
        value={currentValue}
        labels={{
          valueLabel: {
            matchColorWithArc: true,
            formatTextValue: (value: string) => {
              const val = parseInt(value);
              return val >= 0 && val <= 40
                ? "Slim"
                : val > 40 && val < 77
                ? "Fair"
                : "Strong";
            },
            style: {
              fontSize: "35px",
              textShadow: "transparent",
              opacity: "70%",
            },
          },
        }}
        // minValue={100}
        // maxValue={0}
      />
    </div>
  );
};

export default EstimationBar;
