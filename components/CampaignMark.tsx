export default function CampaignMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 46h168" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M28 46c10-20 26-34 48-40 12 12 24 18 24 18s12-6 24-18c22 6 38 20 48 40"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M44 44 V28 h5 V44 h9 V22 h5 V44 h11 V32 h5 V44 h16 l7-16 5 10 6-8 6 14 h18 V30 h5 V44"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M24 50c20 14 48 22 76 22s56-8 76-22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M36 53c16 10 40 16 64 16s48-6 64-16" stroke="currentColor" strokeWidth="1.15" opacity="0.75" />
      <path d="M100 18l3 9h-6z" fill="#c41e3a" />
    </svg>
  )
}
