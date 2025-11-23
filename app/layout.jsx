import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/home/hero/header";
import CallToAction from "./_components/home/callToAction/CallToAction";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Kanour Digital Services",
  description: "Intelligent Software & AI Systems for Financial and Business Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

          <Header />
        {children}
          <CallToAction />
      </body>
    </html>
  );
}
