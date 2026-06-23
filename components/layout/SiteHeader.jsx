"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-[200] border-b transition-[background,box-shadow,border-color] duration-200 ${
        scrolled
          ? "bg-[rgba(7,21,40,0.92)] backdrop-blur-md border-[var(--border-navy)] shadow-[var(--shadow-header)]"
          : "bg-[var(--navy-deep)] border-[var(--border-navy)]"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-[var(--header-height)]">
        <Logo />
        <ul className="hidden md:flex items-center gap-1 list-none" role="list">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] font-medium no-underline px-3 py-2 rounded-[var(--radius-sm)] transition-colors focus-ring ${
                    active
                      ? "text-white bg-white/10"
                      : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:flex items-center gap-2.5">
          <Button href="/get-roof-score" variant="link" className="!text-[13px]">
            Free Score
          </Button>
          <Button href="/pricing" variant="primary" className="!py-2 !px-[18px] !text-[13px]">
            Book Inspection
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] text-white hover:bg-white/8 transition-colors focus-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              open ? "absolute rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              open ? "opacity-0" : "my-1"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              open ? "absolute -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-[var(--border-navy)] bg-[var(--navy-deep)] ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        }`}
        aria-hidden={!open}
      >
        <ul className="list-none flex flex-col gap-1 px-5 py-4" role="list">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm no-underline px-3 py-2.5 rounded-[var(--radius-sm)] transition-colors focus-ring ${
                    active
                      ? "text-white bg-white/10 font-semibold"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 flex flex-col gap-2">
            <Button
              href="/get-roof-score"
              variant="outlineWhite"
              className="w-full justify-center"
            >
              Free Roof Score
            </Button>
            <Button href="/pricing" variant="primary" className="w-full justify-center">
              Book Inspection
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
