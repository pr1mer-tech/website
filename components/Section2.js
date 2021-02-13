import styles from "../styles/Section.module.scss"
import SectionNumber from "./Low/SectionNumber"
import { Divider, Grid, Modal, useModal, Text } from "@geist-ui/react"
import { useState } from "react"

export default function Section2() {
    const { visible, setVisible, bindings } = useModal()
    const [section, setSection] = useState("design")


    const services = {
        design: <>
                <img src={ "/img/Design.svg" } width={140} height={100} />
                <Divider type="dark" />
                <Text h1 className={ styles.title }>DESIGN</Text>
                <Text className={ styles.lines }>
                    Branding & Identity<br/>
                    Voice & Tone<br/>
                    Web & Mobile Apps Design
                </Text>
                </>,
        code: <>
            <img src={ "/img/Code.svg" } width={140} height={100} />
            <Divider type="dark" />
            <Text h1 className={ styles.title }>CODE</Text>
            <Text className={ styles.lines }>
                Modern JAMStack website<br/>
                Mobile apps<br/>
                Backend infrastructure
            </Text>
            </>,
        deploy: <>
                <img src={ "/img/Deploy.svg" } width={140} height={100} />
                <Divider type="dark" />
                <Text h1 className={ styles.title }>DEPLOY</Text>
                <Text className={ styles.lines }>
                    Automatic scaling<br/>
                    High performance global network<br/>
                    Exceptionally affordable
                </Text>
                </>
    }

    return <div className={ styles.section2 }>
        <div className={ styles.container }>
            <SectionNumber n={2} name="Our workflow" />
            <Grid.Container gap={3} className={ styles.cards }>
                <Grid xs={12} md={8} onClick={() => { setSection("design"); setVisible(true) }}>
                    <img src={ "/img/Design.svg" } width={140} height={100} />
                    <Divider type="dark" />
                    <Text h1 className={ styles.title }>DESIGN</Text>
                </Grid>
                <Grid xs={12} md={8} onClick={() => { setSection("code"); setVisible(true) }}>
                    <img src={ "/img/Code.svg" } width={140} height={100} />
                    <Divider type="dark" />
                    <Text h1 className={ styles.title }>CODE</Text>
                </Grid>
                <Grid xs={12} md={8} onClick={() => { setSection("deploy"); setVisible(true) }}>
                    <img src={ "/img/Deploy.svg" } width={140} height={100} />
                    <Divider type="dark" />
                    <Text h1 className={ styles.title }>DEPLOY</Text>
                </Grid>
            </Grid.Container>
            <Modal {...bindings}>
            <Modal.Content>
                { services[section] }
            </Modal.Content>
        </Modal>
        </div>
    </div>
}