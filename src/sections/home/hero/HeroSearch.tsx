"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/hero";

export function HeroSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/#courses");
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="mt-15 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:justify-center"
    >
      <label htmlFor="hero-search" className="sr-only">
        Search courses, topics, or creators
      </label>
      <div className="relative flex-1 sm:w-[461px] sm:flex-none">
        <Image
          src="/images/icons/search.png"
          alt=""
          aria-hidden
          width={24}
          height={24}
          className="pointer-events-none absolute left-6 top-1/2 size-6 -translate-y-1/2"
        />
        <input
          id="hero-search"
          ref={inputRef}
          type="search"
          name="q"
          placeholder={hero.search.placeholder}
          className="h-[52px] w-full rounded-3xl bg-white pl-[56px] pr-6 text-body-l text-neutral-950 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
        />
      </div>
      <Button
        type="submit"
        size="sm"
        className="w-full rounded-3xl text-label-l sm:w-[104px]"
      >
        {hero.search.button}
      </Button>
    </form>
  );
}
