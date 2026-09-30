import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { MaskedArtwork } from "@/components/ui/MaskedArtwork";
import { growthAssets, happyStudents, revenue } from "@/data/growth";

/* Blue stat cards (Total Revenue / Year to Date) — plugin values preserved. */
function RevenueCard({
  title,
  period,
  value,
  delta,
  barFill,
  className,
}: {
  title: string;
  period: string;
  value: string;
  delta: string;
  barFill: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="inline-flex flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4">
        <p className="w-fit font-satoshi text-base font-medium leading-[1.2em] text-[#F5F5F6]">
          {title}
        </p>
        <p className="w-fit font-satoshi text-[10px] leading-[1.2em] text-[#F5F5F6]">{period}</p>
        <p className="w-fit font-poppins text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#F5F5F6]">
          {value}
        </p>
        <button className="flex w-fit cursor-pointer flex-col items-center justify-center rounded-3xl bg-[#CBFC01] px-2 py-0.5">
          <p className="w-fit font-satoshi text-[10px] font-medium leading-5 text-[#242528]">{delta}</p>
        </button>
      </div>
      {/* Progress bar is part of the Total Revenue card only (absolute in plugin). */}
    </div>
  );
}

/**
 * Row-2 left composition: blue revenue cards, creator photo with tablet,
 * "Happy Students" floating card, and the lime swirl.
 * Geometry from the plugin output (541×596 stage).
 */
export function CreatorVisual() {
  return (
    <div className="relative h-[596px] w-[541px] shrink-0">
      {/* Total Revenue card with its bar */}
      <div className="absolute left-0 top-11">
        <div className="inline-flex flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4">
          <p className="w-fit font-satoshi text-base font-medium leading-[1.2em] text-[#F5F5F6]">
            {revenue.total.title}
          </p>
          <p className="w-fit font-satoshi text-[10px] leading-[1.2em] text-[#F5F5F6]">
            {revenue.total.period}
          </p>
          <div className="flex w-[200px] items-center justify-between">
            <p className="w-fit font-poppins text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#F5F5F6]">
              {revenue.total.value}
            </p>
            <button className="flex w-fit cursor-pointer flex-col items-center justify-center rounded-3xl bg-[#CBFC01] px-2 py-0.5">
              <p className="w-fit font-satoshi text-[10px] font-medium leading-5 text-[#242528]">
                {revenue.total.delta}
              </p>
            </button>
          </div>
          {/* Progress bar inside the card (plugin: absolute left-4 top-[95px]) */}
          <div className="relative h-2 w-[200px]">
            <div className="absolute left-0 top-0 h-2 w-[200px] rounded-3xl bg-[#FFF]" />
            <div
              className="absolute left-0 top-0 h-2 rounded-3xl bg-[#D4FB20]"
              style={{ width: revenue.total.barFill * 2 }}
            />
          </div>
        </div>
      </div>

      {/* Year to Date card */}
      <div className="absolute left-0 top-[194px] flex w-[134px] flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4">
        <p className="w-fit font-satoshi text-base font-medium leading-[1.2em] text-[#F5F5F6]">
          {revenue.year.title}
        </p>
        <p className="w-fit font-satoshi text-[10px] leading-[1.2em] text-[#F5F5F6]">
          {revenue.year.period}
        </p>
        <p className="w-fit font-poppins text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#F5F5F6]">
          {revenue.year.value}
        </p>
        <button className="flex w-fit cursor-pointer flex-col items-center justify-center rounded-3xl bg-[#CBFC01] px-2 py-0.5">
          <p className="w-fit font-satoshi text-[10px] font-medium leading-5 text-[#242528]">
            {revenue.year.delta}
          </p>
        </button>
      </div>

      {/* Creator photo */}
      <Image
        src={growthAssets.creator}
        alt="Creator wearing a headset holding a tablet"
        width={435}
        height={596}
        className="lg:student-shadow absolute left-7 top-0 h-[596px] w-[435px] max-w-none object-contain"
      />

      {/* Happy Students card */}
      <div className="absolute left-[283px] top-[413px] flex w-[258px] flex-col items-start gap-2 rounded-2xl bg-[#FFF] p-4">
        <p className="w-fit font-satoshi text-base font-medium leading-6 text-[#242528]">
          {happyStudents.title}
        </p>
        <p className="w-fit font-satoshi text-[10px] text-[#82868E]">{happyStudents.rating}</p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="-ml-3 mt-px h-4 w-4"
        >
          <path
            d="M14.43 10L12 2L9.57 10H2L8.18 14.41L5.83 22L12 17.31L18.18 22L15.83 14.41L22 10H14.43Z"
            fill="#D4FB20"
          />
        </svg>
        <AvatarStack
          avatars={growthAssets.avatars.map((src) => ({ src, alt: "" }))}
          extraLabel={happyStudents.extra}
          size={43}
          className="-space-x-4"
        />
      </div>

      {/* Lime swirl (masked artwork) */}
      <MaskedArtwork
        base={growthAssets.swirlFemale.base}
        mask={growthAssets.swirlFemale.mask}
        fillClassName="bg-[#D4FB20]"
        width={216}
        height={216}
        className="absolute left-[305px] top-[114px]"
      />
    </div>
  );
}
