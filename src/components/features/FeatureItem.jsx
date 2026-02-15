const FeatureItem = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4 w-full md:w-144.75">
      <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#23262F] flex items-center justify-center mt-1">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6L5.5 10.5L15 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <h4 className="text-[#23262F] text-[16px] md:text-[20px] font-semibold leading-7 tracking-normal mb-2">
          {title}
        </h4>

        <p className="text-[#23262F] text-[14px] md:text-[16px] font-normal leading-7 max-w-132.75">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
