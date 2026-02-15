// Komponen kecil untuk isi Stats
const StatItem = ({ number, label }) => {
  return (
    <div className={"flex flex-col items-center text-center px-2"}>
      <h3 className="text-white text-[24px] md:text-[40px] font-semibold leading-[1.2]">
        {number}
      </h3>
      <p className="text-white text-[14px] md:text-[20px] font-normal leading-[1.3] tracking-[1%] opacity-80">
        {label}
      </p>
    </div>
  );
};

export default StatItem;
