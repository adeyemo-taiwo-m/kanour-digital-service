import { HiChip, HiCode, HiCreditCard ,  HiLightningBolt,  HiChartBar } from "react-icons/hi";
import { 
  FaRobot, FaComments, FaChartLine, FaFileAlt, FaTools, 
  FaMobileAlt, FaLaptopCode, FaTachometerAlt, FaNetworkWired, 
  FaCloudUploadAlt, FaRocket, FaWallet, FaUserShield, 
  FaCreditCard, FaLandmark, FaShieldAlt,   FaLinkedinIn, FaTwitter, FaInstagram, FaCode, FaUserTie, FaCogs 
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

export const socials = [
  {
    icon: FaLinkedinIn ,
    link: "https://www.linkedin.com/in/oluwapelumi-olamilekan-289a92222",
  },
  {
    icon: FaTwitter,
    link: "https://x.com/olami_js",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/olami_js?",
  },
];

export const trustPoints = [
  {
    icon: FaShieldAlt,
    title: "Parent-Company Credibility",
    description: "Backed by the robust Kanour ecosystem, ensuring stability and long-term partnership.",
  },
  {
    icon: FaCode,
    title: "FinTech Engineering DNA",
    description: "Deep expertise in building secure, high-performance financial technologies.",
  },
  {
    icon: FaMobileAlt,
    title: "45+ Screens Delivered",
    description: "Extensive portfolio of intuitive, bank-level mobile and web applications.",
  },
  {
    icon: FaCogs,
    title: "Automation & Logic",
    description: "Masters of complex dashboards, smart system logic, and workflow automation.",
  },
  {
    icon: FaUserTie,
    title: "Strong Leadership",
    description: "Led by experienced engineers with a track record of real hands-on delivery.",
  },
  {
    icon: FaRocket,
    title: "Modern Tech Stack",
    description: "Expertise across React Native, React, Node.js, and cutting-edge AI integration.",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Modern e-commerce platform with advanced filtering, cart management, and payment integration.",
    tags: ["React", "TypeScript", "TailwindCSS", "Redux"],
    imageURL:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    liveURL: "https://concavo-demo.vercel.app",
    codeURL: "https://github.com/yourusername/concavo-banking-app",
    color: "bg-blue-600",
    gradient: "from-blue-600 to-blue-900",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    category: "Analytics",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization.",
    tags: ["Next.js", "TypeScript", "Recharts"],
    imageURL:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    liveURL: "https://concavo-demo.vercel.app",
    codeURL: "https://github.com/yourusername/concavo-banking-app",
    color: "bg-emerald-600",
    gradient: "from-emerald-600 to-emerald-900",
  },
  {
    id: 3,
    title: "RESTful API Service",
    category: "API",
    description:
      "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    imageURL:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    liveURL: "https://concavo-demo.vercel.app",
    codeURL: "https://github.com/yourusername/concavo-banking-app",
    color: "bg-orange-600",
    gradient: "from-orange-600 to-orange-900",
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    category: "AI",
    description:
      "Intelligent chatbot powered by machine learning with natural language processing.",
    tags: ["Python", "OpenAI", "LangChain", "FastAPI"],
    imageURL:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    liveURL: "https://concavo-demo.vercel.app",
    codeURL: "https://github.com/yourusername/concavo-banking-app",
    color: "bg-purple-600",
    gradient: "from-purple-600 to-purple-900",
  },
  {
    id: 5,
    title: "Logistics Tracking",
    category: "Logistics",
    description:
      "Real-time logistics and delivery tracking system with GPS integration.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Maps API"],
    imageURL:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    liveURL: "https://concavo-demo.vercel.app",
    codeURL: "https://github.com/yourusername/concavo-banking-app",
    color: "bg-amber-600",
    gradient: "from-amber-600 to-amber-900",
  },
  {
    id: 6,
    title: "Classroom Booking App",
    category: "Education",
    description:
      "Streamlined classroom reservation system for educational institutions.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    imageURL:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
    liveURL: "https://concavo-demo.vercel.app",
    codeURL: "https://github.com/yourusername/concavo-banking-app",
    color: "bg-indigo-600",
    gradient: "from-indigo-600 to-indigo-900",
  },
];
