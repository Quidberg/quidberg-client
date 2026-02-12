import PricingCard from "../../../containers/pricing/PricingCard";

const Pricing = () => {
  return (
    <div className={"p-4 flex flex-col items-center w-full"}>
      <header className="flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Select Your Pricing Plan
        </h1>
        <h3 className="text-lg">
          All Plans free for the first 15 days
        </h3>

        <div></div>
      </header>

      <main className="w-full grid grid-cols-2 md:grid-cols-3">
        <PricingCard
          pricingType={"Free"}
          pricingDescription={"No fee included"}
          currencySym={"N"}
          price={"0.00"}
          frequency={"Monthly"}
          features={[
            "Unlimited Examination Tests",
            "Unlimited Learning Resources",
          ]}
        />
        <PricingCard
          pricingType={"Basic"}
          pricingDescription={"No fee included"}
          currencySym={"N"}
          price={"0.00"}
          frequency={"Monthly"}
          features={["Unlimited Examination Tests"]}
        />
        <PricingCard
          pricingType={"Premium"}
          pricingDescription={"No fee included"}
          currencySym={"N"}
          price={"0.00"}
          frequency={"Monthly"}
          features={["Unlimited Examination Tests"]}
        />
      </main>
    </div>
  );
};

export default Pricing;
