import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
    <section
      id="feature-section"
      className="relative w-full h-147.75 font-sans flex flex-col items-center justify-center md:flex-row gap-25 py-18.5 px-6.25 md:px-25 mt-50 md:mt-0"
    >
      <div className="image-feature w-105 h-67.5 md:w-138.5 md:h-110.75 order-2 md:order-1 mb-10 md:mb-0 -mt-20 md:mt-0">
        <img src="/images/sofa-1.png" className="object-cover" alt="sofa" />
      </div>

      <div className="content-feature order-1 md:order-2">
        <h1 className="w-85 md:w-127 font-semibold text-[24px] md:text-[40px] tracking-normal leading-[130%] mb-3.5">
          We Create Your Home More Aestetic
        </h1>
        <p className="font-normal text-[16px] md:text-[20px] leading-[170%] tracking-normal w-85 md:w-146.75 mb-8.75">
          Furnitre power is a software as services for multiperpose business
          management system,
        </p>
        <div className="flex flex-col gap-6.25">
          <FeatureItem
            title="Valuation Services"
            description="Sometimes features require a short description. This can be detailed description"
          />
          <FeatureItem
            title="Development of Furniture Modelss"
            description="Sometimes features require a short description. This can be detailed description"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
