import Image from "next/image"
import BackToTop from "@/components/BackToTop"
import SiteNav from "@/components/SiteNav"
import { PRIORITIES, SITE } from "@/lib/site"

export default function Home() {
  return (
    <>
      <a className="ki-skip" href="#why">
        Skip to content
      </a>
      <SiteNav />

      <main>
        <section id="hero" className="ki-hero" aria-label="Campaign introduction">
          <div className="ki-hero-copy">
            <Image
              className="ki-hero-logo"
              src="/images/ki-logo-b.png"
              alt="Kristina Irwin, Los Angeles Community College District Board of Trustees"
              width={459}
              height={287}
              priority
            />
            <p className="ki-eyebrow">Candidate for LACCD Board of Trustees • {SITE.seat}</p>
            <h1>
              <span className="ki-h-line">A Stronger</span>
              <span className="ki-h-line">Future for Our</span>
              <span className="ki-h-line ki-script">Community</span>
              <span className="ki-h-line ki-peach">Colleges.</span>
            </h1>
            <p className="ki-lede">
              Safe. Accountable. Affordable. Focused on preparing every student for success.
            </p>
            <div className="ki-hero-actions">
              <a className="ki-btn ki-btn-red ki-btn-stack" href="#about">
                Meet
                <br />
                Kristina
              </a>
              <a className="ki-text-link" href="#priorities">
                Read her commitments
                <span className="ki-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="ki-hero-photo">
            <div className="ki-hero-frame">
              <Image
                src="/images/kristina-hero.png"
                alt="Kristina Irwin, smiling in a black blazer"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 22%" }}
                priority
              />
            </div>
            <p className="ki-hero-caption">Professional • Businesswoman • Community Advocate</p>
          </div>
        </section>

        <div className="ki-vote-bar">
          <span>Los Angeles Community College District</span>
          <strong>Vote {SITE.election}</strong>
          <span>Board of Trustees • {SITE.seat}</span>
        </div>

        <section id="why" className="ki-why">
          <div className="ki-why-inner">
            <div>
              <p className="ki-label">Why I&apos;m Running</p>
              <h2>
                Opportunity
                <br />
                begins with strong
                <br />
                community
                <br />
                colleges.
              </h2>
            </div>
            <div className="ki-why-copy">
              <p className="lead">
                Our community colleges are more than places to earn a degree. They are gateways to
                opportunity—helping students build careers, strengthen families, and create a better
                future.
              </p>
              <p className="body">
                I&apos;m running because our students deserve colleges that are safe, accountable,
                affordable, and focused on preparing them for success. I understand the importance of
                responsible leadership and making sure every dollar entrusted to our colleges is used
                wisely.
              </p>
              <p className="ki-sign">— Kristina Irwin</p>
            </div>
          </div>
        </section>

        <section id="priorities" className="ki-priorities">
          <div className="ki-priorities-head">
            <div>
              <p className="ki-label ki-label-soft">My Commitment</p>
              <h2>
                Practical leadership.
                <br />
                Clear priorities.
              </h2>
            </div>
            <p>
              Kristina will keep the Board focused on what matters most: students, opportunity,
              responsible stewardship, and the future of Los Angeles.
            </p>
          </div>
          <div className="ki-grid">
            {PRIORITIES.slice(0, 3).map((p) => (
              <article className="ki-card" key={p.n}>
                <span className="ki-num">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <div className="ki-grid-row">
            {PRIORITIES.slice(3).map((p) => (
              <article className="ki-card" key={p.n}>
                <span className="ki-num">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="ki-about">
          <div className="ki-about-inner">
            <div className="ki-photos">
              <Image
                className="ki-photo-main"
                src="/images/kristina-phone.png"
                alt="Kristina Irwin on a phone call while writing on a legal pad"
                width={1254}
                height={1254}
                sizes="(max-width: 900px) 88vw, 40vw"
              />
              <Image
                className="ki-photo-inset"
                src="/images/kristina-work.png"
                alt="Kristina Irwin in a red blazer smiling while looking at a laptop"
                width={1178}
                height={1335}
                sizes="(max-width: 900px) 50vw, 22vw"
              />
            </div>
            <div className="ki-about-copy">
              <p className="ki-label">Meet Kristina</p>
              <h2>Experience grounded in work, community, and common sense.</h2>
              <p>
                Kristina Irwin is a Los Angeles professional, businesswoman, and community advocate.
                She brings the habits of real work—listening, following through, and keeping
                commitments—to public service.
              </p>
              <p>
                She believes the Board should be independent, practical, and focused on students:
                colleges that are safe, accountable, and affordable, with pathways into careers that
                strengthen families and the region.
              </p>
              <p style={{ marginTop: 28 }}>
                <a className="ki-text-link-navy" href="#involve">
                  Stand with Kristina
                  <span className="ki-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="involve" className="ki-involve">
          <div className="ki-involve-inner">
            <p className="ki-label ki-label-soft">Move forward—together</p>
            <h2>Help build a stronger future for Los&nbsp;Angeles&nbsp;students.</h2>
            <div className="ki-involve-stack">
            <p className="ki-involve-lede">
              Join Kristina&apos;s campaign for opportunity, excellence, accountability, and
              common&nbsp;sense.
            </p>
            <div className="ki-involve-actions">
              <a className="ki-btn ki-btn-white" href={`mailto:${SITE.email}?subject=Join the campaign`}>
                Join the Campaign
              </a>
              <a className="ki-btn ki-btn-ghost" href={`mailto:${SITE.email}?subject=Endorse Kristina Irwin`}>
                Endorse Kristina
              </a>
            </div>
            <aside className="ki-check" aria-labelledby="ki-check-heading">
              <h3 id="ki-check-heading">Donate by Check</h3>
              <p className="ki-check-label">Make checks payable to:</p>
              <p className="ki-check-payee">{SITE.checkPayee}</p>
              <p className="ki-check-label">Mail to:</p>
              <address className="ki-check-mail">
                {SITE.checkMail.street}
                <br />
                {SITE.checkMail.cityLine}
              </address>
            </aside>
            <a
              className="ki-btn ki-btn-ghost ki-check-download"
              href={SITE.formHref}
              download={SITE.formFileName}
            >
              Download Form
            </a>
            <p className="ki-note">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="ki-foot">
        <p className="ki-foot-name">
          <span className="red">KRISTINA</span> IRWIN
        </p>
        <p className="ki-foot-office">
          Candidate for {SITE.office} • {SITE.seat}
        </p>
        <p className="ki-disc">
          Campaign disclosure placeholder: Paid for by [Official Committee Name] • FPPC ID #[Number]
        </p>
      </footer>
      <BackToTop />
    </>
  )
}
