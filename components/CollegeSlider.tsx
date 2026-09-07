"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { LACCD_COLLEGES } from "@/lib/colleges"

type Props = {
  activeId: string | null
  onSelect: (id: string) => void
}

export default function CollegeSlider({ activeId, onSelect }: Props) {
  const trackRef = useRef<HTMLOListElement>(null)
  const [canUp, setCanUp] = useState(false)
  const [canDown, setCanDown] = useState(true)
  const [range, setRange] = useState({ from: 1, to: Math.min(5, LACCD_COLLEGES.length) })

  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return

    const items = Array.from(el.querySelectorAll<HTMLElement>(":scope > li"))
    if (!items.length) return

    const viewTop = el.scrollTop
    const viewBottom = viewTop + el.clientHeight
    let first = -1
    let last = -1

    items.forEach((item, i) => {
      const top = item.offsetTop
      const bottom = top + item.offsetHeight
      const visible = bottom > viewTop + 8 && top < viewBottom - 8
      if (!visible) return
      if (first === -1) first = i
      last = i
    })

    if (first === -1) {
      first = 0
      last = Math.min(items.length - 1, 4)
    }

    setRange({ from: first + 1, to: last + 1 })
    const max = el.scrollHeight - el.clientHeight
    setCanUp(el.scrollTop > 4)
    setCanDown(max > 4 && el.scrollTop < max - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    sync()
    el.addEventListener("scroll", sync, { passive: true })
    window.addEventListener("resize", sync)

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => sync()) : null
    ro?.observe(el)

    return () => {
      el.removeEventListener("scroll", sync)
      window.removeEventListener("resize", sync)
      ro?.disconnect()
    }
  }, [sync])

  const scrollTrackTo = (top: number, smooth = true) => {
    const el = trackRef.current
    if (!el) return
    const max = Math.max(0, el.scrollHeight - el.clientHeight)
    const nextTop = Math.min(max, Math.max(0, top))
    el.scrollTo({ top: nextTop, behavior: smooth ? "smooth" : "auto" })
  }

  useEffect(() => {
    if (!activeId || !trackRef.current) return
    const el = trackRef.current
    const item = el.querySelector<HTMLElement>(`[data-college-id="${activeId}"]`)
    if (!item) return

    const viewTop = el.scrollTop
    const viewBottom = viewTop + el.clientHeight
    const top = item.offsetTop
    const bottom = top + item.offsetHeight

    if (top < viewTop) {
      scrollTrackTo(top)
    } else if (bottom > viewBottom) {
      scrollTrackTo(bottom - el.clientHeight)
    }
  }, [activeId])

  const step = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const items = Array.from(el.querySelectorAll<HTMLElement>(":scope > li"))
    if (!items.length) return

    const viewTop = el.scrollTop
    let index = items.findIndex((item) => item.offsetTop + item.offsetHeight > viewTop + 12)
    if (index < 0) index = 0

    const next = Math.min(items.length - 1, Math.max(0, index + dir))
    const target = items[next]
    if (!target) return
    scrollTrackTo(target.offsetTop)
  }

  return (
    <div className="ki-college-slider">
      <div className="ki-college-slider-toolbar">
        <p className="ki-college-slider-hint">
          Colleges{" "}
          <span>
            {range.from}–{range.to} of {LACCD_COLLEGES.length}
          </span>
        </p>
        <div className="ki-college-slider-nav">
          <button
            type="button"
            className="ki-college-slider-btn"
            aria-label="Show previous colleges"
            disabled={!canUp}
            onClick={() => step(-1)}
          >
            ↑
          </button>
          <button
            type="button"
            className="ki-college-slider-btn"
            aria-label="Show next colleges"
            disabled={!canDown}
            onClick={() => step(1)}
          >
            ↓
          </button>
        </div>
      </div>
      <ol
        ref={trackRef}
        className="ki-college-list ki-college-list-slider"
        tabIndex={0}
        aria-label="Los Angeles Community College District campuses"
      >
        {LACCD_COLLEGES.map((c, i) => {
          const active = c.id === activeId
          return (
            <li key={c.id} data-college-id={c.id}>
              <button
                type="button"
                className={`ki-college-item${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => onSelect(c.id)}
              >
                <span className="ki-college-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ki-college-copy">
                  <strong>{c.name}</strong>
                  <span>{c.city}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
