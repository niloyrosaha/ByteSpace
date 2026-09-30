"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";
import { NavbarMobileMenu } from "@/components/layout/NavbarMobileMenu";
import { primaryNav, authNav } from "@/data/nav";

const MENU_ID = "navbar-mobile-menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 h-[120px]">
        <Container className="relative flex h-full items-center justify-between lg:block">
          {/* Left — Logo */}
          <div className="flex items-center lg:absolute lg:left-[2px] lg:top-[35px]">
            <Logo variant="white" />
          </div>

          {/* Center — Desktop nav links */}
          <nav
            aria-label="Primary"
            className="hidden items-start gap-6 lg:absolute lg:left-1/2 lg:top-[48px] lg:flex lg:-translate-x-1/2"
          >
            {primaryNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  i === 0
                    ? "text-label-m font-medium text-white hover:text-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
                    : "text-body-m text-white hover:text-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right — Auth links + Bag */}
          <div className="flex items-center gap-6 lg:absolute lg:right-0 lg:top-[48px]">
            <div className="hidden items-center gap-6 lg:flex">
              {authNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-m leading-6 text-white hover:text-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bag icon */}
            <Link
              href="#"
              aria-label="Shopping bag"
              className="text-white hover:text-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Image src="/images/icons/bag.png" alt="" aria-hidden width={24} height={24} />
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="flex items-center text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} aria-hidden />
            </button>
          </div>
        </Container>
      </header>

      <NavbarMobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        menuId={MENU_ID}
      />
    </>
  );
}
