import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PlotifyHomes - Premium Plots & Properties You Can Trust",
    template: "%s | PlotifyHomes",
  },
  description:
    "Discover verified land and property listings with transparent pricing. Your trusted partner for residential plots, villas, apartments, and commercial properties.",
  keywords: [
    "real estate",
    "property",
    "plots",
    "villas",
    "apartments",
    "Bangalore",
    "Karnataka",
    "buy property",
    "land for sale",
  ],
  authors: [{ name: "PlotifyHomes" }],
  openGraph: {
    title: "PlotifyHomes - Premium Plots & Properties You Can Trust",
    description:
      "Discover verified land and property listings with transparent pricing.",
    type: "website",
    locale: "en_IN",
    siteName: "PlotifyHomes",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
