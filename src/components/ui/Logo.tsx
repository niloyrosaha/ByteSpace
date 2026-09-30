import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "white" | "dark";
  className?: string;
  href?: string;
}

export function Logo({ variant = "white", className, href = "/" }: LogoProps) {
  const inner = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* Brand mark — Vector (6).png */}
      <Image
        src="/images/icons/Vector (6).png"
        alt=""
        aria-hidden
        width={29}
        height={32}
      />
      <span
        className={cn(
          "font-logo text-[24px] font-bold leading-none",
          variant === "white" ? "text-neutral-50" : "text-neutral-950",
        )}
      >
        ByteSpace
      </span>
    </span>
  );

  return (
    <Link href={href} aria-label="ByteSpace home">
      {inner}
    </Link>
  );
}
