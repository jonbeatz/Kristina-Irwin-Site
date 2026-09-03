export const SITE = {
  name: "Kristina Irwin",
  office: "Los Angeles Community College District Board of Trustees",
  seat: "Seat 2",
  election: "November 3, 2026",
  email: "kristina@kristinairwin.com",
  url: "https://kristinairwin.com",
  checkPayee: "Kristina Irwin for LACC Trustee 2026",
  checkMail: {
    street: "20121 Ventura Blvd., Suite 307",
    cityLine: "Woodland Hills, CA 91364",
  },
  formHref: "/media/Kristina-Irwin-contribution-form.docx",
  formFileName: "Kristina-Irwin-contribution-form.docx",
  /** Blue link in Google. Keep under ~60 characters. */
  title: "Kristina Irwin | LACCD Board of Trustees, Seat 2",
  /**
   * Search snippet + Open Graph description.
   * Change this string when Kristina supplies official copy, then redeploy.
   * Google often truncates around 150–160 characters (this one is longer on purpose).
   */
  description:
    "Kristina Irwin is a Los Angeles professional, businesswoman, and community advocate. She brings the habits of real work—listening, following through, and keeping commitments—to public service.",
}

export const NAV = [
  { href: "#why", id: "why", label: "Why Kristina" },
  { href: "#priorities", id: "priorities", label: "Priorities" },
  { href: "#about", id: "about", label: "About" },
] as const

export const PRIORITIES = [
  {
    n: "01",
    title: "Students First",
    body: "Keeping the focus where it belongs: on student achievement, opportunity, and preparing graduates for meaningful careers.",
  },
  {
    n: "02",
    title: "Accountability",
    body: "Making sure taxpayers and students can see how resources are being spent and that our colleges are operating responsibly.",
  },
  {
    n: "03",
    title: "Career & Workforce Opportunities",
    body: "Strengthening pathways to good-paying careers in the skilled trades, technology, healthcare, business, and other fields essential to our region.",
  },
  {
    n: "04",
    title: "Safe & Supportive Campuses",
    body: "Creating learning environments where students can focus on their education and faculty and staff can do their jobs effectively.",
  },
  {
    n: "05",
    title: "A Voice for Our Community",
    body: "Bringing a practical, independent perspective to the Board and listening to students, parents, faculty, staff, employers, and taxpayers.",
  },
] as const
