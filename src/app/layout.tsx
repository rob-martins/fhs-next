import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Firehouse Subs",
  description: "Enjoy more subs. Save more lives. Portion of every purchase goes to providing lifesaving equipment to first responders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
