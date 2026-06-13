"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-[200] bg-[var(--navy-deep)] border-b border-[var(--border-navy)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-[60px]">
        <Logo />
        <ul className="hidden md:flex items-center gap-7 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-medium text-white/65 no-underline hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2.5">
          <Button href="/contact" variant="primary" className="!py-2 !px-[18px] !text-[13px]">
            Book Inspection
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden text-white text-2xl leading-none p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border-navy)] bg-[var(--navy-deep)] px-8 py-4">
          <ul className="list-none flex flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 no-underline hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href="/contact" variant="primary" className="w-full justify-center">
                Book Inspection
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
