import type { Metadata } from "next";
import "@/app/globals.css";

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
    <html lang="en">
      <head>
        {/* Google Fonts — loaded at runtime, no build-time network needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}