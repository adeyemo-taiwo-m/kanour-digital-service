import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "./_components/home/hero/header";
import CallToAction from "./_components/home/callToAction/CallToAction";
import Footer from "./_components/layout/Footer";
import ThemeToggle from "./_ui/ThemeToggle";

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
  description:
    "Intelligent Software & AI Systems for Financial and Business Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}  font-sans antialiased bg-background text-foreground relative`}
      >
        {/* Background decoration */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Background decoration */}
          <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Gradient Blobs */}
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-default/10 blur-[120px] animate-pulse" />
            <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-variant/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary-default/5 blur-[100px]" />
          </div>

          <Header />
          {children}
          <CallToAction />
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
