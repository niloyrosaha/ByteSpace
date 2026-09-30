import Image from "next/image";
import { growthAssets } from "@/data/growth";

/* Supplied SVG paths, preserved exactly. */
const CHART_PATH =
  "M13.75 3.3335H16.25V16.6668H13.75V3.3335ZM3.75 11.6668H6.25V16.6668H3.75V11.6668ZM8.75 7.50016H11.25V16.6668H8.75V7.50016Z";
const STAR_PATH =
  "M14.43 10L12 2L9.57 10H2L8.18 14.41L5.83 22L12 17.31L18.18 22L15.83 14.41L22 10H14.43Z";

const CARD_AVATARS = [
  growthAssets.avatars[0],
  growthAssets.avatars[1],
  growthAssets.avatars[2],
  growthAssets.avatars[3],
];

/**
 * Compact course card (373×384) shown behind the student photo in the growth
 * visual — plugin markup reproduced with its distinct values: white "26+"
 * badge, lime star, tighter title/author line heights.
 */
export function MiniCourseCard() {
  return (
    <div className="relative h-96 w-[373px] overflow-hidden rounded-3xl border border-[#CED0D3] bg-[#FFF]">
      <Image
        src={growthAssets.miniCourseCover}
        alt="Learn Figma from Basic course cover"
        width={341}
        height={196}
        className="absolute left-4 top-4 h-[195px] w-[341px] max-w-none rounded-xl object-cover"
      />

      <div className="absolute left-4 top-[232px] inline-flex flex-col items-start gap-4">
        <div>
          <p className="w-fit font-poppins text-xl font-semibold leading-7 tracking-[-0.01em] text-[#000]">
            Learn Figma from Basic
          </p>
          <p className="w-fit font-satoshi text-xs leading-5 text-[#003BE2]">
            by purepearl studio
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex w-fit cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-3xl bg-[#F5F5F6] px-3 py-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="relative h-5 w-5 overflow-hidden">
              <path d={CHART_PATH} fill="#4B4C53" />
            </svg>
            <p className="w-fit font-satoshi text-xs font-medium leading-5 text-[#4B4C53]">Beginner</p>
          </button>

          <div className="flex w-fit items-start -space-x-2">
            {CARD_AVATARS.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                aria-hidden
                width={32}
                height={32}
                className="h-8 w-8 max-w-none rounded-[32px]"
              />
            ))}
            <div className="relative flex w-fit items-start gap-2">
              <div className="h-8 w-8" />
              <p className="absolute right-1 top-1.5 h-5 w-[23px] text-center font-satoshi text-xs font-medium leading-5 text-[#FFF]">
                26+
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <p className="flex h-6 w-9 flex-col justify-center font-poppins text-xl font-semibold leading-7 tracking-[-0.01em] text-[#003BE2]">
            $25
          </p>
          <p className="w-fit font-satoshi text-xs leading-5 text-[#4F4F4F]">/lifetime</p>
        </div>
      </div>

      <div className="absolute left-[306px] top-[232px] inline-flex items-center">
        <p className="absolute left-0 top-0 font-satoshi text-lg font-medium leading-7 text-[#4F4F4F]">
          4.5{" "}
        </p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="absolute left-[27px] top-0.5 h-6 w-6 overflow-hidden">
          <path d={STAR_PATH} fill="#D4FB20" />
        </svg>
      </div>
    </div>
  );
}
