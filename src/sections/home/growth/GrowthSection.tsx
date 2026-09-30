import { GrowthVisual } from "./GrowthVisual";
import { CreatorVisual } from "./CreatorVisual";
import {
  creatorChecklist,
  creatorIntro,
  growthIntro,
  growthStats,
} from "@/data/growth";

/* CHECK_PATH — supplied check-circle SVG path, preserved exactly. */
const CHECK_PATH =
  "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z";

/* Radial gradient blobs — exact plugin values, on the plugin's 2456×2391
   layer which sits at (-508,-466) relative to the 1440px design canvas. */
const LAYER_BLOBS = [
  {
    id: "blue-bottom-right",
    className:
      "left-[1230px] top-[1254px] size-[1137px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.06)_53%,rgba(0,59,226,0.01)_75%,rgba(0,59,226,0.00)_100%)]",
  },
  {
    id: "lime-top",
    className:
      "left-[356px] top-0 size-[1137px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.40)_0%,rgba(203,252,1,0.09)_53%,rgba(203,252,1,0.02)_75%,rgba(203,252,1,0.00)_100%)]",
  },
  {
    id: "blue-mid-left",
    className:
      "left-0 top-[649px] size-[1137px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.16)_0%,rgba(0,59,226,0.04)_53%,rgba(0,59,226,0.01)_75%,rgba(0,59,226,0.00)_100%)]",
  },
  {
    id: "blue-top-right",
    className:
      "left-[1319px] top-2 size-[1137px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.08)_0%,rgba(0,59,226,0.02)_53%,rgba(0,59,226,0.00)_75%,rgba(0,59,226,0.00)_100%)]",
  },
] as const;

/**
 * Professional Growth / creator section.
 *
 * Content and blobs share one centered 1440px design canvas so the soft
 * color glows hug the composition exactly like the source design, at any
 * viewport width. Rows reproduce the plugin geometry: left offset 121px,
 * top 120px, 72px between rows.
 */
export function GrowthSection() {
  return (
    <section
      id="creators"
      aria-labelledby="growth-heading"
      className="relative overflow-hidden bg-[#FAFAFA]"
    >
      <div className="relative mx-auto w-[1440px]">
        {/* Decorative radial blobs (plugin layer at -508,-466 on the canvas) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[508px] -top-[466px] z-0 h-[2391px] w-[2456px]"
        >
          {LAYER_BLOBS.map((blob) => (
            <div key={blob.id} className={`absolute rounded-[1137px] ${blob.className}`} />
          ))}
        </div>
        {/* Bottom-left lime glow (plugin: 672px at -287, 946 on the canvas) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[287px] top-[946px] z-0 size-[672px] rounded-[672px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.60)_0%,rgba(203,252,1,0.14)_53%,rgba(203,252,1,0.04)_75%,rgba(203,252,1,0.00)_100%)]"
        />

        {/* Content — plugin root at left 121 / top 120, rows 72px apart */}
        <div className="relative z-10 flex flex-col gap-[72px] pb-[120px] pl-[121px] pt-[120px]">
          {/* Row 1 — intro + stats (left), student visual (right) */}
          <div className="flex items-center gap-[63px]">
            <div className="flex w-[574px] shrink-0 flex-col items-start gap-10">
              <h2
                id="growth-heading"
                className="w-[577px] font-heading text-[44px] font-semibold leading-[1.2em] tracking-[-0.01em] text-[#242528]"
              >
                {growthIntro.heading}
              </h2>
              <p className="w-[477px] text-lg leading-[1.6em] text-[#4B4C53]">
                {growthIntro.description}
              </p>
              <div className="flex w-fit items-end gap-14">
                {growthStats.map((stat) => (
                  <div key={stat.id} className="flex w-fit flex-col items-start">
                    <p className="w-fit font-heading text-4xl font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2]">
                      {stat.value}
                    </p>
                    <p className="w-fit text-lg leading-[1.6em] text-[#4B4C53]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <GrowthVisual />
          </div>

          {/* Row 2 — creator visual (left), create & manage copy (right) */}
          <div className="flex items-center gap-[79px]">
            <CreatorVisual />

            <div className="flex w-[580px] shrink-0 flex-col items-start gap-10">
              <h2 className="w-[391px] font-heading text-[44px] font-semibold leading-[1.2em] tracking-[-0.01em] text-[#242528]">
                {creatorIntro.heading}
              </h2>
              <p className="w-[574px] text-lg leading-[1.6em] text-[#4B4C53]">
                <span className="font-bold">{creatorIntro.lead}</span>{" "}
                {creatorIntro.description.replace(/^ByteSpace\s*/, "")}
              </p>
              <div className="flex w-fit flex-col items-start gap-4">
                {creatorChecklist.map((item) => (
                  <div key={item} className="flex w-fit items-end gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                      className="relative h-6 w-6 overflow-hidden"
                    >
                      <path d={CHECK_PATH} fill="#003BE2" />
                    </svg>
                    <p className="w-fit text-lg font-medium leading-[1.2em] text-[#242528]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
