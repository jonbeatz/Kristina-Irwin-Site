import type { Metadata, Viewport } from "next"
import { Allura, Cormorant_Garamond, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-source",
  display: "swap",
})

const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kristinairwin.com"),
  title: "Kristina Irwin | LACCD Board of Trustees, Seat 2",
  description:
    "Kristina Irwin for Los Angeles Community College District Board of Trustees, Seat 2. Safe, accountable, affordable colleges — focused on preparing every student for success.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kristinairwin.com",
    siteName: "Kristina Irwin",
    title: "Kristina Irwin | LACCD Board of Trustees, Seat 2",
    description:
      "Kristina Irwin for Los Angeles Community College District Board of Trustees, Seat 2. Safe, accountable, affordable colleges — focused on preparing every student for success.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristina Irwin | LACCD Board of Trustees, Seat 2",
    description:
      "Kristina Irwin for Los Angeles Community College District Board of Trustees, Seat 2. Safe, accountable, affordable colleges — focused on preparing every student for success.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${source.variable} ${script.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
