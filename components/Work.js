import styles from "../styles/Section.module.scss"

export default function Work() {
    return <div className={ styles.work }>
        <div>
            <div className={styles.let}>
                Let's work
            </div>
            <a className={ styles.together } href="/contact">
                Together ➔
            </a>
        </div>
    </div>
}
