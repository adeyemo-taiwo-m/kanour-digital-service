import { HiCheckCircle } from "react-icons/hi";

export default function WhyChooseUsCard({ title, description ,  index }) {
    return (
         <div
                key={index}
                className="group p-6 rounded-2xl bg-white dark:bg-dark-variant/10 border border-dark-variant/5 dark:border-light-variant/5 hover:border-primary-default/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-default/5 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 min-w-[24px]">
                    <HiCheckCircle className="w-6 h-6 text-primary-default/50 group-hover:text-primary-default transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-dark-default dark:text-light-default group-hover:text-primary-default transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-dark-variant/70 dark:text-light-variant/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
    )
}   
