import HeroContent from "./_components/home/hero/HeroContent";
import TrustedBy from "./_components/home/trustedBy/TrustedBy";
import WhatWeDo from "./_components/home/what we do/whatWeDo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-background text-foreground relative overflow-hidden">
    
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gradient Blobs */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-default/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-variant/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary-default/5 blur-[100px]" />
      </div>

    <HeroContent  />
    <TrustedBy />
    <WhatWeDo />
    </div>
  );
}

