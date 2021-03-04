import styles from "../styles/Section.module.scss"
import Link from "next/link"

export default function Work() {
    return <div className={ styles.work }>
        <div>
            <div className={styles.let}>
                Let's work
            </div>
            <Link href="/contact">
                <a className={ styles.together }>
                    Together ➔
                </a>
            </Link>
        </div>
    </div>
}
