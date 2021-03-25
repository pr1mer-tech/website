import styles from "../../styles/NavBar.module.scss"
import Link from "next/link"

export default function NavBar() {
    return <nav className={ styles.navbar }>
        <Link href="/"><div className={ styles.logo }/></Link>
    </nav>
}