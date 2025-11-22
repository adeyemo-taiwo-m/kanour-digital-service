import { HiChip, HiCode, HiCreditCard } from "react-icons/hi";


export const reasons = [
  {
    title: "Enterprise-grade reliability",
    description: "Systems built to handle scale, security, and critical operations without failure.",
  },
  {
    title: "Deep FinTech & automation experience",
    description: "Specialized knowledge in financial regulations, payment flows, and process automation.",
  },
  {
    title: "Fast delivery and clean engineering",
    description: "Rapid deployment cycles with maintainable, high-quality codebases.",
  },
  {
    title: "Transparent communication",
    description: "Clear updates, honest feedback, and direct access to the engineering team.",
  },
  {
    title: "Long-term partnership mindset",
    description: "We build for your future success, not just to finish a project.",
  },
  
  {
    title: "Strategic technical guidance",
    description: "Expert advice on architecture, stack selection, and roadmap planning.",
  },
  {
    title: "Proven leadership and execution",
    description: "Experienced technical leadership ensuring projects stay on track and deliver value.",
  },
  {
    title: "Optimized system performance",
    description: "Designing and implementing solutions that maximize efficiency, reliability, and scalability.",
  },
];

export const services = [
  {
    title: "AI Automation & Intelligent Systems",
    description:
      "Automate workflows, speed up operations, eliminate manual work, and unlock new business capabilities through intelligent AI tools.",
    icon: <HiChip className="w-8 h-8 text-primary-default" />,
    features: [
      "AI workflow assistants",
      "AI customer support",
      "Process automation",
      "Predictive analytics",
      "Document intelligence",
      "Voice-to-text & transcription",
      "Operations AI tools",
    ],
  },
  {
    title: "Software & Product Engineering",
    description:
      "We build fast, secure, scalable software that supports real business operations.",
    icon: <HiCode className="w-8 h-8 text-primary-default" />,
    features: [
      "Web apps",
      "Mobile apps (iOS/Android)",
      "Dashboards & analytics",
      "Enterprise systems",
      "Internal tools",
      "MVPs & prototypes",
      "Cloud architecture & modernization",
    ],
  },
  {
    title: "FinTech Engineering",
    description:
      "Secure, reliable, compliant, and high-performance engineering for financial services.",
    icon: <HiCreditCard className="w-8 h-8 text-primary-default" />,
    features: [
      "Wallet systems",
      "Payment integrations",
      "Digital banking modules",
      "Lending platforms",
      "KYC & onboarding",
      "Compliance automation",
      "Agency banking systems",
    ],
  },
];
