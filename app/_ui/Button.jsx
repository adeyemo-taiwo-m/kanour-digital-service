export default function Button({children , type = "primary"}) {
    const styles = {
        primary: "px-8 py-4 rounded-full bg-primary-default hover:bg-primary-variant text-white font-semibold text-lg transition-all shadow-lg shadow-primary-default/25 hover:shadow-primary-variant/40 active:scale-95" , secondary : "px-8 py-4 rounded-full border border-dark-default/20 dark:border-light-default/20 hover:bg-dark-default/5 dark:hover:bg-light-default/5 text-dark-default dark:text-light-default font-semibold text-lg transition-all active:scale-95 backdrop-blur-sm" , tertiary: "inline-flex items-center gap-2 text-primary-default font-semibold hover:gap-3 transition-all group"
    }
    return (
        <button className={styles[type]}>
            {children}
          </button>
    )
}
