import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../assets/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Clash Display is used only by the ByteSpace wordmark in Logo.tsx.
const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Learn, Grow, Create",
  description:
    "ByteSpace is the online learning platform that ignites opportunity by setting the world in motion. Explore courses, find your learning path, and grow your skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`}
    >
      <body className="font-body text-body-m text-neutral-950 antialiased">{children}</body>
    </html>
  );
}
