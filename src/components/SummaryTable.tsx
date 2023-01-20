const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid-rows-7 grid-flow-col gap-3">
        {weekDays.map((weekDay, i) => (
          <div
            key={`${weekDay}-${i}`}
            className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>
      <div className="grid-rows-7 grid-flow-row gap-3">
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg "></div>
      </div>
    </div>
  );
}
