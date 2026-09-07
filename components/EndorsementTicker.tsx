import { ENDORSEMENTS } from "@/lib/endorsements"

function EndorsementItems({ copyId }: { copyId: string }) {
  return (
    <>
      {ENDORSEMENTS.map((e) => (
        <li key={`${copyId}-${e.name}`} className="ki-endorse-item">
          <strong>{e.name}</strong>
          <span>{e.title}</span>
        </li>
      ))}
    </>
  )
}

export default function EndorsementTicker() {
  return (
    <aside className="ki-endorse" aria-labelledby="ki-endorse-heading">
      <div className="ki-endorse-shell">
        <p id="ki-endorse-heading" className="ki-endorse-label">
          Endorsed by
        </p>

        <ul className="ki-endorse-sr">
          <EndorsementItems copyId="sr" />
        </ul>

        <div className="ki-endorse-marquee" aria-hidden="true">
          <ul className="ki-endorse-track">
            <EndorsementItems copyId="a" />
            <EndorsementItems copyId="b" />
          </ul>
        </div>
      </div>
    </aside>
  )
}
