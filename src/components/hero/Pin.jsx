const Pin = ({ top, left }) => {
  return (
    <div
      className="absolute flex items-center justify-center pointer-events-auto"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-[2px]">
        <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
      </div>
    </div>
  );
};

export default Pin;
