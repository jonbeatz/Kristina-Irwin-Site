"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import CollegeSlider from "@/components/CollegeSlider"

const DistrictMap = dynamic(() => import("@/components/DistrictMap"), {
  ssr: false,
  loading: () => <div className="ki-map-leaflet ki-map-leaflet-loading" aria-hidden="true" />,
})

export default function DistrictSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="district" className="ki-district" aria-labelledby="ki-district-heading">
      <div className="ki-district-inner">
        <header className="ki-district-head">
          <p className="ki-label">Our District</p>
          <h2 id="ki-district-heading">
            Nine colleges.
            <br />
            One Los&nbsp;Angeles.
          </h2>
          <p>
            Seat&nbsp;2 helps steward the Los Angeles Community College District—campuses across the
            region that open doors for students, families, and the workforce.
          </p>
        </header>

        <div className="ki-district-body">
          <DistrictMap activeId={activeId} onSelect={setActiveId} />
          <CollegeSlider activeId={activeId} onSelect={setActiveId} />
        </div>
      </div>
    </section>
  )
}
