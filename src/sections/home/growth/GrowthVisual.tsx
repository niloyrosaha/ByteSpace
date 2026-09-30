import Image from "next/image";
import { MiniCourseCard } from "@/components/cards/MiniCourseCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MaskedArtwork } from "@/components/ui/MaskedArtwork";
import { growthAssets, learningProgress } from "@/data/growth";

/**
 * Row-1 right composition: mini course card behind the smiling student,
 * "Learning Progress" floating card, and the lime swirl.
 * Geometry from the plugin output (621×552 stage).
 */
export function GrowthVisual() {
  return (
    <div className="relative h-[552px] w-[621px] shrink-0">
      <MiniCourseCard />

      {/* Student photo */}
      <Image
        src={growthAssets.student}
        alt="Smiling student wearing headphones with a laptop"
        width={577}
        height={540}
        className="lg:student-shadow absolute left-0 top-3 h-[540px] w-[577px] max-w-none object-contain"
      />

      {/* Learning Progress card */}
      <div className="absolute left-[345px] top-[213px] inline-flex flex-col items-start gap-2 rounded-2xl bg-[#FFF] p-4">
        <p className="font-satoshi text-sm font-medium leading-6 text-[#242528]">
          {learningProgress.label}
        </p>
        <p className="font-poppins text-5xl font-semibold leading-[1.2em] tracking-[-0.01em] text-[#242528]">
          {learningProgress.value}
        </p>
        <ProgressBar
          value={learningProgress.displayValue}
          barFill={learningProgress.barFill}
          className="w-[200px]"
        />
      </div>

      {/* Lime swirl (masked artwork) */}
      <MaskedArtwork
        base={growthAssets.swirlMale.base}
        mask={growthAssets.swirlMale.mask}
        fillClassName="bg-[#D4FB20]"
        width={216}
        height={216}
        className="absolute left-[406px] top-[67px]"
      />
    </div>
  );
}
