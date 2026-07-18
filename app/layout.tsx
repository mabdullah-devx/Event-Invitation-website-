import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Poppins } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Dinner Gathering — Abida & Naveeda",
  description:
    "You are cordially invited to a beautiful Family Dinner Gathering. Join us for a night of togetherness, delicious food, and warm memories shared with loved ones.",
  keywords: ["family gathering", "dinner", "invitation", "Qasr Al Hamra"],
  openGraph: {
    title: "Family Dinner Gathering — Abida & Naveeda",
    description:
      "Join us for a night of togetherness, delicious food, warm conversations, and beautiful memories.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}