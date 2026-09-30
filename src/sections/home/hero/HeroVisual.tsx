import Image from "next/image";
import { FloatingCard } from "@/components/cards/FloatingCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { hero } from "@/data/hero";

// Exact FigRoot avatar assets — filenames must not change.
const avatars = [
  { src: "/images/hero/Ellipse.png", alt: "" },
  { src: "/images/hero/Ellipse(1).png", alt: "" },
  { src: "/images/hero/Ellipse(2).png", alt: "" },
  { src: "/images/hero/Ellipse(3).png", alt: "" },
  { src: "/images/hero/Ellipse(4).png", alt: "" },
  { src: "/images/hero/Ellipse(5).png", alt: "" },
  { src: "/images/hero/Ellipse(6).png", alt: "" },
];

export function HeroVisual() {
  return (
    /* Stage: on mobile flows in-document below the text; on lg becomes an absolute 1440px-centered layer */
    <div className="relative mx-auto mt-10 h-[430px] w-full max-w-[520px] lg:absolute lg:inset-y-0 lg:left-1/2 lg:mx-0 lg:mt-0 lg:h-auto lg:w-[1440px] lg:max-w-none lg:-translate-x-1/2">
      {/* Lime disc */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-secondary-500
          top-[90px] h-[640px] w-[640px]
          md:top-[50px] md:h-[820px] md:w-[820px]
          lg:left-[145px] lg:top-[582px] lg:h-[1149px] lg:w-[1149px] lg:translate-x-0"
      />

      {/* Student photo */}
      <div
        className="absolute left-1/2 bottom-0 w-[280px] -translate-x-1/2
          md:w-[340px]
          lg:left-[431px] lg:top-[512px] lg:bottom-auto lg:w-[578px] lg:translate-x-0"
      >
        <Image
          src="/images/hero/Image.png"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
          priority
          sizes="(min-width: 1024px) 578px, 420px"
          className="h-auto w-full object-contain lg:student-shadow"
        />
      </div>

      {/* Category card — hidden on mobile, shown md+ */}
      <FloatingCard
        className="absolute hidden w-[208px] gap-0 md:flex md:flex-col md:p-4
          md:left-1/2 md:top-[60px] md:-translate-x-1/2 md:scale-90
          lg:left-[404px] lg:top-[639px] lg:h-[70px] lg:translate-x-0 lg:scale-100"
      >
        <p className="text-label-m font-medium text-neutral-950">
          {hero.cards.category.title}
        </p>
        <p className="flex items-center gap-2 text-body-xs text-neutral-400">
          {hero.cards.category.courses}
          <span className="text-[10px] leading-[1.5] text-neutral-400">•</span>
          {hero.cards.category.students}
        </p>
      </FloatingCard>

      {/* Learning Progress card */}
      <FloatingCard
        className="absolute flex w-[208px] origin-top-right scale-75 flex-col gap-2 p-4
          right-0 top-[10px]
          md:w-[232px] md:scale-90 md:right-0 md:top-[10px]
          lg:left-[842px] lg:top-[651px] lg:right-auto lg:h-[131px] lg:w-[232px] lg:origin-top-left lg:scale-100"
      >
        <p className="text-label-s font-medium text-neutral-950">
          {hero.cards.progress.label}
        </p>
        <p className="font-heading text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-neutral-950">
          {hero.cards.progress.value}%
        </p>
        <ProgressBar
          value={hero.cards.progress.value}
          barFill={hero.cards.progress.barFill}
          className="mt-auto w-[200px]"
        />
      </FloatingCard>

      {/* Happy Students card */}
      <FloatingCard
        className="absolute bottom-0 left-0 flex w-[220px] origin-bottom-left scale-75 flex-col gap-0 p-4
          md:w-[258px] md:scale-90
          lg:left-[328px] lg:top-[837px] lg:bottom-auto lg:h-[121px] lg:w-[258px] lg:origin-top-left lg:scale-100"
      >
        <p className="text-label-m font-medium text-neutral-950">
          {hero.cards.students.title}
        </p>
        <div className="flex items-center">
          <span className="text-neutral-950">{hero.cards.students.rating}</span>
          <span className="text-neutral-400">{hero.cards.students.reviews}</span>
          <Image
            src="/images/icons/star.png"
            alt=""
            aria-hidden
            width={16}
            height={16}
            className="ml-px size-4"
          />
        </div>
        <div className="mt-2">
          <AvatarStack
            avatars={avatars}
            extraLabel={hero.cards.students.extra}
            size={43}
            className="-space-x-4"
          />
        </div>
      </FloatingCard>
    </div>
  );
}
