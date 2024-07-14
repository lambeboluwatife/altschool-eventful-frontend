import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./css/style.css";
import Header from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Eventful - Create and discover events around you.",
  description:
    "Eventful's your passport to a world of unforgettable moments. From pulsating concerts to captivating theater performances, and thrilling sports events to enlightening cultural gatherings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
