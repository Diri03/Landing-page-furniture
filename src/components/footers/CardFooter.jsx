const CardFooter = ({ title, children }) => {
  return (
    <div className="our-product">
      <h3 className="font-medium text-[18px] leading-[100%] tracking-normal mb-6.25">
        {title}
      </h3>
      <ul className="list-none font-normal text-[14px] leading-5 tracking-normal flex flex-col gap-4">
        {children}
      </ul>
    </div>
  );
};

export default CardFooter;
