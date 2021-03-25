import styles from "../styles/Section.module.scss"
import SectionNumber from "./Low/SectionNumber"
import Projects from "./Medium/Projects"

export default function Section3() {

    return <div className={ styles.section3 }>
        <div className={ styles.container }>
            <SectionNumber n={3} name="Our projects" />
        </div>
        <Projects />
    </div>
}
