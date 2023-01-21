import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";

interface HabitProps {
  completed: number;
  amount: number;
}

export function HabitDay(props: HabitProps) {
  const percentage = Math.round((props.completed / props.amount) * 100);
  console.log(percentage);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg", {
          "bg-zinc-900 border-zinc-800": percentage === 0,
          "bg-violet-900 border-violet-600": percentage > 0 && percentage < 20,
          "bg-violet-800 border-violet-600":
            percentage >= 20 && percentage < 40,
          "bg-violet-700 border-violet-500":
            percentage >= 40 && percentage < 60,
          "bg-violet-600 border-violet-500":
            percentage >= 60 && percentage < 80,
          "bg-violet-500 border-violet-400": percentage >= 80,
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400"></span>
          <span className="mt-1 font-extrabold leading-tight text-3xl"></span>
          <ProgressBar progress={percentage} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
