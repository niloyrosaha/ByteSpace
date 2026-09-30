"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNav, authNav } from "@/data/nav";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuId: string;
}

export function NavbarMobileMenu({ isOpen, onClose, menuId }: NavbarMobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id={menuId}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 flex flex-col bg-primary-900 px-6 py-8"
    >
      <div className="flex items-center justify-end">
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={24} aria-hidden />
        </button>
      </div>

      <nav aria-label="Mobile primary" className="mt-10 flex flex-col gap-6">
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-body-l text-white hover:text-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-8">
        {authNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-body-l text-white hover:text-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
