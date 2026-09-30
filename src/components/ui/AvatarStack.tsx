import Image from "next/image";
import { cn } from "@/lib/cn";

interface AvatarItem {
  src: string;
  alt: string;
}

interface AvatarStackProps {
  avatars: AvatarItem[];
  extraLabel?: string;
  size?: number;
  className?: string;
}

export function AvatarStack({
  avatars,
  extraLabel,
  size = 42,
  className,
}: AvatarStackProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-white"
          style={{
            width: size,
            height: size,
            // using space-x for overlap so no manual marginLeft needed on children!
          }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
            sizes={`${size}px`}
          />
        </div>
      ))}
      {extraLabel && (
        <div
          className="relative shrink-0 overflow-hidden rounded-full bg-secondary-500 ring-2 ring-white"
          style={{
            width: size,
            height: size,
          }}
        >
          <span className="flex h-full w-full items-center justify-center text-label-xs font-medium text-neutral-950">
            {extraLabel}
          </span>
        </div>
      )}
    </div>
  );
}
