import ServiceSection from "../_components/services/ServiceSection";
import { 
  FaRobot, FaComments, FaChartLine, FaFileAlt, FaTools, 
  FaMobileAlt, FaLaptopCode, FaTachometerAlt, FaNetworkWired, FaCloudUploadAlt, FaRocket,
  FaWallet, FaUserShield, FaCreditCard, FaLandmark, FaShieldAlt
} from "react-icons/fa";

// 
export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
    
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-default/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-variant/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary-default/5 blur-[100px]" />
      </div>

      <div className="w-full pt-32 pb-20">
        {/* Page Header */}
        <div className="container mx-auto px-4 md:px-6 mb-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Our <span className="text-primary-default">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build the future of your business with cutting-edge technology and engineering excellence.
          </p>
        </div>

        {/* Service Sections */}
        <div className="flex flex-col">
          
            <ServiceSection />
         
        
        </div>
      </div>
    </div>
  );
}

