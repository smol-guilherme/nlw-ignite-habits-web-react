interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}%`,
  };
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full m-4">
      <div
        className="h-3 rounded-xl bg-violet-600 transition-all"
        role="progressbar"
        aria-label="Progresso concluído do dia"
        aria-valuenow={props.progress}
        style={progressStyles}
      ></div>
    </div>
  );
}
