import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robotics Engineering Team | Portfolio",
  description:
    "Portfolio of a multidisciplinary robotics engineering team spanning embedded firmware, PCB design, electronics, mechanical design, and validation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
