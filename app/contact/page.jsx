

import ContactForm from "../_components/contact/ContactForm";

import ScrollAnimation from "../_ui/ScrollAnimation";

export default function Contact() {
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

      <div className="w-full pt-32 pb-10 text-center px-4">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-default dark:text-light-default mb-6">
            Let’s Build Something <span className="text-primary-default">Intelligent</span>.
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <p className="text-xl text-dark-variant/70 dark:text-light-variant/70 max-w-2xl mx-auto">
            Tell us about your project. Our engineering team will respond within 24 hours.
          </p>
        </ScrollAnimation>
      </div>

      <div className="w-full px-4 pb-20">
        <ContactForm />
      </div>
    </div>
  );
}

