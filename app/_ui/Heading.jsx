export default function Heading({children , type = "h1"}) {
const styles = {
    h1: "text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-b from-dark-default to-dark-variant dark:from-white dark:to-white/70",
    h2: "text-4xl sm:text-5xl font-bold mb-6 text-dark-default dark:text-light-default",
}   


    return (
        <h1 className={styles[type]}>
          {children}
        </h1>
    )
}

