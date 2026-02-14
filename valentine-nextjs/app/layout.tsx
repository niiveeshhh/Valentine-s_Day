import type { Metadata } from "next";
import "../styles/styles.css";
import "../styles/enhancements.css";
import "../styles/responsive.css";
import "../styles/gallery-responsive.css";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "Happy Valentine's Day 💝",
  description: "A romantic Valentine's Day experience",
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
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="heartsBackground" className="hearts-background"></div>
        {children}
      </body>
    </html>
  );
}
