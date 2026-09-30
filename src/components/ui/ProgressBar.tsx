import { cn } from "@/lib/cn";

interface ProgressBarProps {
  /** Displayed value, 0–100 */
  value: number;
  /** Visual fill percentage when it differs from the displayed value (defaults to `value`) */
  barFill?: number;
  className?: string;
}

export function ProgressBar({ value, barFill, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const fill = Math.min(100, Math.max(0, barFill ?? clamped));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-neutral-50", className)}
    >
      <div
        className="h-full rounded-full bg-secondary-400 transition-[width]"
        style={{ width: `${fill}%` }}
      />
    </div>
  );
}
