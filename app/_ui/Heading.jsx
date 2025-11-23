export default function Heading({children , type = "h1", className = ""}) {
    const styles = {
        h1: "font-heading text-5xl sm:text-6xl md:text-[60px] font-bold tracking-tight max-w-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-b from-dark-default to-dark-variant dark:from-white dark:to-white/70",
        h2: "font-heading text-3xl sm:text-[40px] font-semibold mb-6 text-dark-default dark:text-light-default",
        h3: "font-sans text-2xl font-semibold mb-4 text-dark-default dark:text-light-default",
    }   

    const Tag = type;

    return (
        <Tag className={`${styles[type]} ${className}`}>
          {children}
        </Tag>
    )
}

