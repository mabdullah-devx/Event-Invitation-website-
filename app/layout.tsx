import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Poppins } from "next/font/google";
import "@/app/globals.css";

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
  title: "Family Lunch Gathering — Abida & Naveeda",
  description:
    "You are cordially invited to a beautiful Family Lunch Gathering. Join us for an afternoon of togetherness, delicious food, and warm memories shared with loved ones.",
  keywords: ["family gathering", "lunch", "invitation", "Qasr Al Hamra"],
  openGraph: {
    title: "Family Lunch Gathering — Abida & Naveeda",
    description:
      "Join us for an afternoon of togetherness, delicious food, warm conversations, and beautiful memories.",
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
      </body>
    </html>
  );
}