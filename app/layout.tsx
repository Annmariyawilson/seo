import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Lavender SEO — Learn SEO Beautifully",
  description: "A professional, modern SEO-focused website built with Next.js following perfect SEO rules.",
  metadataBase: new URL("http://localhost:3000"),
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
