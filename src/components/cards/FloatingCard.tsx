import { cn } from "@/lib/cn";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingCard({ children, className }: FloatingCardProps) {
  return (
    <div className={cn("rounded-2xl bg-white p-4 text-neutral-950", className)}>
      {children}
    </div>
  );
}
