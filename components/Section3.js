import styles from "../styles/Section.module.scss"
import SectionNumber from "./Low/SectionNumber"
import { Divider, Grid, Text } from "@geist-ui/react"
import Image from "next/image"
export default function Section3() {
    const projects = [{
        name: "Lunar Icons",
        image: "lunar.png",
        url: "https://lunar.pr1mer.tech"
    }, {
        name: "Waffle Grid",
        image: "waffle.jpg",
        url: "https://waffle.pr1mer.tech"
    }, {
        name: "StudIO Code",
        image: "studio.png",
        url: "https://studiocode.app"
    }, {
        name: "Web Guidelines",
        image: "guidelines.png",
        url: "https://guidelines.pr1mer.tech"
    }, {
        name: "Corona Tracing - CrypTool",
        image: "cryptool.png",
        url: "https://corona-tracing.cryptool.org"
    }, {
        name: "Euclid Calculator",
        image: "euclid.webp",
        url: "https://euclid.pr1mer.tech"
    }, {
        name: "Ma Seconde Cabane",
        image: "masecondecabane.png",
        url: "https://masecondecabane.com"
    }, {
        name: "A-Capital Advisors S.A. (Switzerland)",
        image: "a-capital.png",
        url: "https://a-capital.ch"
    }]

    return <div className={ styles.section3 }>
        <div className={ styles.container }>
            <SectionNumber n={3} name="Our projects" />
        </div>
        <div className={ styles.carousel } id="projects-slide">
            <div className={ styles.c1 }>
            {
                projects.map(project => <div className={ styles.project }>
                    <a href={ project.url }>
                        <Image src={ project.image } width={290} height={190} objectFit="cover" />
                    </a>
                </div>)
            }
            </div>
            <div className={ styles.c2 }>
            {
                projects.map(project => <div className={ styles.project }>
                    <a href={ project.url } target="_blank">
                        <Image src={ project.image } width={290} height={190} objectFit="cover" />
                    </a>
                </div>)
            }
            </div>
        </div>
    </div>
}
