"use client"

import { useEffect, useState } from "react"
import { NAV } from "@/lib/site"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
}

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("hero")

  useEffect(() => {
    const ids = ["hero", ...NAV.map((n) => n.id), "involve"]
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    )
    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    function onResize() {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  function go(id: string) {
    setActive(id)
    setOpen(false)
    scrollToId(id)
  }

  return (
    <nav className="ki-nav" aria-label="Primary">
      <div className="ki-nav-inner">
        <a
          href="#hero"
          className="ki-brand"
          onClick={(e) => {
            e.preventDefault()
            go("hero")
          }}
        >
          {/* Graphic mark parked — swap back in if we want it in the bar
          <Image
            className="ki-nav-mark"
            src="/images/logo-nav-mix.png"
            alt="Kristina Irwin"
            width={424}
            height={132}
            priority
          />
          */}
          <span className="ki-wordmark">
            <span>KRISTINA</span> <span>IRWIN</span>
          </span>
        </a>

        <button
          className="ki-nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="ki-primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="ki-primary-nav" className={`ki-nav-links${open ? " open" : ""}`}>
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={n.href}
                aria-current={active === n.id ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  go(n.id)
                }}
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="ki-btn ki-btn-red"
              href="#involve"
              onClick={(e) => {
                e.preventDefault()
                go("involve")
              }}
            >
              Get Involved
            </a>
          </li>
        </ul>
      </div>
      {open ? (
        <button
          type="button"
          className="ki-nav-scrim"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </nav>
  )
}
