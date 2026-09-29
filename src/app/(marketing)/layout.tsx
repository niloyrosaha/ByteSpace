import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Learn, Grow, Create",
  description:
    "ByteSpace is the online learning platform that ignites opportunity by setting the world in motion.",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
