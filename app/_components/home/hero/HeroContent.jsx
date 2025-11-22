import HeroButtons from "./HeroButtons";
import Heading from "@/app/_ui/Heading"

export default function HeroContent() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pt-28 pb-12 md:pt-32 md:pb-20">
      <Heading>
        Intelligent Software & AI Systems for{" "}
        <span className="text-primary-default">Financial</span> and{" "}
        <span className="text-primary-default">Business</span> Excellence
      </Heading>

      <p className="text-xl font-light sm:text-xl text-dark-variant/80 dark:text-light-variant/80 max-w-6xl mb-12 leading-relaxed">
        We design, build, and deploy modern digital systems including workflow
        automation, enterprise applications, and FinTech solutions that help
        companies operate faster, smarter, and more efficiently.
      </p>

      <HeroButtons />
    </main>
  );
}
