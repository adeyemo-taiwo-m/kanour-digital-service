import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./_components/home/hero/header";
import CallToAction from "./_components/home/callToAction/CallToAction";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Kanour Digital Services",
  description: "Intelligent Software & AI Systems for Financial and Business Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
          <Header />
        {children}
          <CallToAction />
      </body>
    </html>
  );
}
