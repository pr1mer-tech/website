import styles from "../styles/Section.module.scss"
import SectionNumber from "./Low/SectionNumber"
import { Text } from "@geist-ui/react"
export default function Section1() {
    return <div className={ styles.section1 }>
        <div className={ styles.topLine } />
        <div className={ styles.leftLine } />
        <div className={ styles.rightLine } />
        <div className={ styles.bottomLine } />
        <div className={ styles.circle1 } />
        <div className={ styles.circle2 } />
        <div className={ styles.rectangle } />
        <div className={ styles.container }>
            <SectionNumber n={1} name="Our philosophy" />
            <Text className={ styles.description }>
                Pr1mer is a small group of passionate developers and designers in constant evolution.  We have a unique design process, and we control every step in the creation of our projects. We believe that an idea can change everything, if properly heard. We are constantly challenging ourselves to provide the best services to our users.
            </Text>
        </div>
    </div>
}