import styles from "../styles/Section.module.scss"
import SectionNumber from "./Low/SectionNumber"
import { Divider, Grid, Text } from "@geist-ui/react"
import { ArrowRight } from '@geist-ui/react-icons'

export default function Work() {
    return <div className={ styles.work }>
        <div>
            <div className={styles.let}>
                Let's work
            </div>
            <div className={ styles.together }>
                Together ➔
            </div>
        </div>
    </div>
}
