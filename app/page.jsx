import HeroContent from "./_components/home/hero/HeroContent";
import TrustedBy from "./_components/home/trustedBy/TrustedBy";
import WhatWeDo from "./_components/home/what we do/whatWeDo";
import Portfolio from "./_components/home/Portfolio/Portfolio";
import OurDifference from "./_components/home/ourDifference/OurDifference";
import WhyChooseUs from "./_components/home/whyChooseUs/whyChooseUs";
import ScrollAnimation from "./_ui/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center  text-foreground relative overflow-hidden">
      <HeroContent />
      <TrustedBy />
      <WhatWeDo />
      <Portfolio />
      <OurDifference />
      <WhyChooseUs />
    </div>
  );
}
