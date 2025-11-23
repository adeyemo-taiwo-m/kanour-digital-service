export default function Button({ children, type = "primary" }) {
  const styles = {
    primary:
      "px-8 py-4 flex justify-center items-center rounded-lg bg-primary-default hover:bg-primary-variant text-white font-semibold text-lg transition-all shadow-lg shadow-primary-default/25 hover:shadow-primary-variant/40 active:scale-95",
    primarySmall:
      "px-4 py-2 text-sm flex justify-center items-center rounded-lg bg-primary-default hover:bg-primary-variant text-white font-semibold text-lg transition-all shadow-lg shadow-primary-default/25 hover:shadow-primary-variant/40 active:scale-95",
    secondary:
      "px-8 py-4 rounded-lg border border-dark-default/20 dark:border-light-default/20 hover:bg-dark-default/5 dark:hover:bg-light-default/5 text-dark-default dark:text-light-default font-semibold text-lg transition-all active:scale-95 backdrop-blur-sm",
    tertiary:
      "inline-flex items-center gap-2 text-primary-default font-semibold hover:gap-3 transition-all group rounded-lg"
  };

  return <button className={styles[type]}>{children}</button>;
}
