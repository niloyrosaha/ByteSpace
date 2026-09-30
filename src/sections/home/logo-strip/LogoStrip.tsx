import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { logos } from "@/data/logos";

export function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="bg-neutral-50">
      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-10 md:flex-nowrap md:justify-between">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center gap-2 text-neutral-500"
            aria-label={logo.name}
          >
            <Image src={logo.icon} alt="" aria-hidden width={40} height={40} />
            <span className="font-body text-label-m font-medium text-neutral-500">
              {logo.name}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
