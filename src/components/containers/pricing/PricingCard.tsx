import MainButton from "../../../components/ui/buttons/MainButton";
import CheckText from "../../../components/ui/tags/CheckText";

type PropType = {
  pricingType: string;
  pricingDescription: string;
  currencySym: string;
  price: string;
  frequency: string;
  features: string[];
};

const PricingCard = ({
  pricingType,
  pricingDescription,
  currencySym,
  price,
  frequency,
  features,
}: PropType) => {
  return (
    <div className="p-4 w-full max-w-[400px] bg-drop_down_bg ">
      <header className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">{pricingType}</h1>
        <h2 className="font-medium">{pricingDescription}</h2>
      </header>

      <section className="w-full mt-6">
        <div className="flex gap-1 justify-center w-full">
          <p>{currencySym}</p>
          <p className="text-xl md:text-2xl font-semibold">{price}</p>
          <p>/{frequency}</p>
        </div>
      </section>

      <section className="max-h-[400px] flex justify-center mt-6">
        <div className="flex flex-col gap-2">
          {features.map((feature) => (
            <CheckText>{feature}</CheckText>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mt-6">
        <MainButton>Choose Plan</MainButton>
      </div>
    </div>
  );
};

export default PricingCard;
