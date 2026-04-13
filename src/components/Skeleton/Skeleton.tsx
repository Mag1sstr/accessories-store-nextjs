interface IProps {
  type: "menu";
}

function Skeleton({ type }: IProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="h-16 bg-[#F9F9F9] rounded-lg flex items-center gap-2 animate-pulse pr-4"
        >
          <div className="h-12 w-12 rounded-lg bg-[#E1E1E1]"></div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="p-1 bg-[#E1E1E1] rounded-lg"></p>
            <p className="p-1 max-w-20 bg-[#E1E1E1] rounded-lg"></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
