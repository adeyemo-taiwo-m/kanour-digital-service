export default function HeroButtons() {
    return (
         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 rounded-full bg-primary-default hover:bg-primary-variant text-white font-semibold text-lg transition-all shadow-lg shadow-primary-default/25 hover:shadow-primary-variant/40 active:scale-95">
            Start Your Project
          </button>
          <button className="px-8 py-4 rounded-full border border-dark-default/20 dark:border-light-default/20 hover:bg-dark-default/5 dark:hover:bg-light-default/5 text-dark-default dark:text-light-default font-semibold text-lg transition-all active:scale-95 backdrop-blur-sm">
            Book a Consultation
          </button>
        </div>
    )
}
