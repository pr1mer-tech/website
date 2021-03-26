import styles from "../../styles/Section.module.scss"
import Image from "next/image"

export const projects = [{
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

export default function Projects({ active=false }) {
    return <div className={ styles.carousel } id="projects-slide">
        <div className={ styles.c1 } style={ active ? {animation: "slide 30s linear infinite"} : {}}>
        {
            projects.map(project => <div className={ styles.project } key={ project.name }>
                <a href={ project.url }>
                    {
                        active == false && <Image src={ project.image } width={290} height={190} objectFit="cover" />
                    }
                    {
                        active == true && <img src={ `https://images.pr1mer.tech/${project.image}?auto=compress&w=290&h=190&dpr=${window.devicePixelRatio}&fit=crop` } width={290} height={190} objectFit="cover" />
                    }
                </a>
            </div>)
        }
        </div>
        <div className={ styles.c2 } style={ active ? {animation: "slide 30s linear infinite"} : {}}>
        {
            projects.map(project => <div className={ styles.project } key={ project.name }>
                <a href={ project.url } target="_blank">
                    {
                        active == false && <Image src={ project.image } width={290} height={190} objectFit="cover" />
                    }
                    {
                        active == true && <img src={ `https://images.pr1mer.tech/${project.image}?auto=compress&w=290&h=190&dpr=${window.devicePixelRatio}&fit=crop` } width={290} height={190} objectFit="cover" />
                    }
                </a>
            </div>)
        }
        </div>
    </div>
}