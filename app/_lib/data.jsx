import { HiChip, HiCode, HiCreditCard ,  HiLightningBolt,  HiChartBar } from "react-icons/hi";
import { 
  FaRobot, FaComments, FaChartLine, FaFileAlt, FaTools, 
  FaMobileAlt, FaLaptopCode, FaTachometerAlt, FaNetworkWired, 
  FaCloudUploadAlt, FaRocket, FaWallet, FaUserShield, 
  FaCreditCard, FaLandmark, FaShieldAlt,  
} from "react-icons/fa";

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

export const differences = [
  {
    title: "AI-first",
    description:
      "We don't just add AI as an afterthought. We build intelligent systems from the ground up to automate complex workflows.",
    icon: <HiLightningBolt className="w-10 h-10 text-primary-default" />,
  },
  {
    title: "Engineering-driven",
    description:
      "Robust, scalable, and secure code is our obsession. We build software that stands the test of time and scale.",
    icon: <HiCode className="w-10 h-10 text-primary-default" />,
  },
  {
    title: "Results-focused",
    description:
      "Technology is a means to an end. We focus on delivering tangible business outcomes and measurable ROI.",
    icon: <HiChartBar className="w-10 h-10 text-primary-default" />,
  },
];

// Service categories


export  const serviceCategories = [
  {
    title: "AI Automation & Intelligent Systems",
    description: "Replace manual work with smart assistants and predictive insights.",
    ctaText: "Book AI Automation Consultation",
    ctaLink: "/contact",
    services: [
      { title: "AI Workflow Automation", description: "Replace manual, repetitive work with custom smart assistants.", icon: <FaRobot /> },
      { title: "AI Customer Support", description: "Chatbots, response automation, and intelligent help desks.", icon: <FaComments/> },
      { title: "Predictive Business Intelligence", description: "Sales, finance, and operations prediction and insights.", icon: <FaChartLine/> },
      { title: "Document Automation", description: "OCR, document processing, verification modules.", icon: <FaFileAlt/> },
      { title: "Internal AI Tools", description: "Custom tools to support your process: HR, ops, finance, logistics.", icon: <FaTools/> },
    ]
  },
  {
    title: "Software & Product Engineering",
    description: "Build scalable, high-performance applications for web and mobile.",
    ctaText: "Start a Software Project",
    ctaLink: "/contact",
    services: [
      { title: "Mobile App Development", description: "Premium iOS/Android apps using React Native.", icon: <FaMobileAlt /> },
      { title: "Web App Development", description: "Modern frontends + scalable backends (React + Node).", icon: <FaLaptopCode /> },
      { title: "Enterprise Dashboards & Systems", description: "Operational dashboards, reporting tools, workflow systems.", icon: <FaTachometerAlt /> },
      { title: "Internal Tools & Business Apps", description: "Mini-ERPs, inventory systems, staff management tools.", icon: <FaNetworkWired /> },
      { title: "Cloud Modernization", description: "Migrating old systems into fast, reliable, modern architecture.", icon: <FaCloudUploadAlt /> },
      { title: "MVP Engineering", description: "Speed + reliability for startup founders.", icon: <FaRocket /> },
    ]
  },
  {
    title: "FinTech Engineering",
    description: "Secure, compliant, and innovative financial technology solutions.",
    ctaText: "Talk to a FinTech Engineer",
    ctaLink: "/contact",
    services: [
      { title: "Wallets & Payment Platforms", description: "Build or integrate secure wallet systems.", icon: <FaWallet /> },
      { title: "KYC & Identity Systems", description: "Verification workflows, compliance modules.", icon: <FaUserShield /> },
      { title: "Lending & Credit Systems", description: "Automated scoring, risk engines, loan management.", icon: <FaCreditCard /> },
      { title: "Digital Banking Experiences", description: "Secure onboarding, account management, transaction analytics.", icon: <FaLandmark /> },
      { title: "Fraud & Compliance Automation", description: "AI-driven fraud monitoring and risk systems.", icon: <FaShieldAlt /> },
    ]
  }
];
