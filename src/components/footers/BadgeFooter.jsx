const BadgeFooter = ({ title }) => {
  return (
    <a href="#" className="relative rounded-full bg-gray-800 p-4">
      <span className="absolute inset-0 m-auto h-fit w-fit">{title}</span>
    </a>
  );
};

export default BadgeFooter;
