"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { LACCD_COLLEGES } from "@/lib/colleges"

function pinIcon(n: string, active: boolean) {
  return L.divIcon({
    className: `ki-leaflet-pin${active ? " is-active" : ""}`,
    html: `<span class="ki-leaflet-pin-inner">${n}</span>`,
    iconSize: active ? [42, 42] : [34, 34],
    iconAnchor: active ? [21, 21] : [17, 17],
    popupAnchor: [0, active ? -20 : -16],
  })
}

type Props = {
  activeId: string | null
  onSelect: (id: string) => void
}

export default function DistrictMap({ activeId, onSelect }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<Map<string, L.Marker>>(new Map())
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect

  useEffect(() => {
    if (!hostRef.current || mapRef.current) return

    const map = L.map(hostRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    })
    mapRef.current = map

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    const bounds = L.latLngBounds([])
    const markers = new Map<string, L.Marker>()

    LACCD_COLLEGES.forEach((c, i) => {
      const n = String(i + 1).padStart(2, "0")
      const marker = L.marker([c.lat, c.lng], {
        icon: pinIcon(n, false),
        riseOnHover: true,
      }).addTo(map)

      marker.bindPopup(
        `<strong>${c.name}</strong><br/><span class="ki-map-popup-city">${c.city}</span>`,
      )
      marker.on("click", () => onSelectRef.current(c.id))
      markers.set(c.id, marker)
      bounds.extend([c.lat, c.lng])
    })

    markersRef.current = markers
    map.fitBounds(bounds.pad(0.18))

    const onResize = () => map.invalidateSize()
    window.addEventListener("resize", onResize)
    const t = window.setTimeout(onResize, 80)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener("resize", onResize)
      map.remove()
      mapRef.current = null
      markersRef.current = new Map()
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    LACCD_COLLEGES.forEach((c, i) => {
      const marker = markersRef.current.get(c.id)
      if (!marker) return
      const n = String(i + 1).padStart(2, "0")
      const active = c.id === activeId
      marker.setIcon(pinIcon(n, active))
      if (active) {
        marker.setZIndexOffset(600)
        map.flyTo([c.lat, c.lng], Math.max(map.getZoom(), 11), { duration: 0.65 })
        marker.openPopup()
      } else {
        marker.setZIndexOffset(0)
      }
    })
  }, [activeId])

  return (
    <figure className="ki-map" aria-labelledby="ki-map-caption">
      <div
        ref={hostRef}
        className="ki-map-leaflet"
        role="img"
        aria-label="Interactive street map of the nine Los Angeles Community College District campuses"
      />
      <figcaption id="ki-map-caption" className="ki-map-caption">
        Nine campuses from Sylmar to Wilmington — Seat&nbsp;2 covers the whole district. Click a pin
        or a college name to connect them.
      </figcaption>
    </figure>
  )
}
