type Status = "idle" | "loading" | "success" | "warning" | "error";

type StatusBarProps = {
  status: Status;
};

const statusLabels: Record<Status, string> = {
  idle: "Ready",
  loading: "Generating brief...",
  success: "Brief generated",
  warning: "Generated with warning",
  error: "Action needed",
};

const statusStyles: Record<Status, string> = {
  idle: "border-white/10 bg-white/[0.04] text-slate-300",
  loading: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  success: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  warning: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  error: "border-red-400/30 bg-red-500/10 text-red-100",
};

export function StatusBar({ status }: StatusBarProps) {
  return (
    <div
      className={`mb-4 flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition duration-200 ${statusStyles[status]}`}
    >
      <span>{statusLabels[status]}</span>

      {status === "loading" ? (
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
      ) : null}
    </div>
  );
}
