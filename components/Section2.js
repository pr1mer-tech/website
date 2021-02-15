import styles from "../styles/Section.module.scss"
import SectionNumber from "./Low/SectionNumber"
import { Divider, Grid, Modal, useModal, Text, Collapse } from "@geist-ui/react"
import { useState } from "react"

export default function Section2() {
    const { visible, setVisible, bindings } = useModal()
    const [section, setSection] = useState("design")


    const services = {
        design: <>
                <img src={ "/img/Design.svg" } width={140} height={100} className={ styles.s2img } />
                <Divider type="dark" />
                <Text h1 className={ styles.title }>DESIGN</Text>
                <Collapse.Group style={{ fontFamily: "var(--monoMediumFont)" }}>
                    <Collapse title="Branding & Identity">
                        Pr1mer helps you to create or renew your graphic charter, offering various services ranging from the creation of a logo to the design of a design system.

                        Successful branding involves more than just adding brand assets to your website. Great websites express unique brand identity through smart font, color, and image decisions. Provide enough branding to give people context in your site, but not so much that it becomes a distraction.
                    </Collapse>
                    <Collapse title="Voice & Tone">
                        Every word in your site/app is part of a conversation with your users, and Pr1mer knows it. We this conversation to help them feel comfortable in your site.

                        Pr1mer always pays attention to the terminology used in order to match the tone of your brand image.
                    </Collapse>
                    <Collapse title="Web & Mobile Apps Design">
                        We are experts in website design, but also in mobile application development. We create, refine and select prototypes so that you can help us better understand your goal before moving on to development.
                    </Collapse>
                </Collapse.Group>
                </>,
        code: <>
            <img src={ "/img/Code.svg" } width={140} height={100} className={ styles.s2img } />
            <Divider type="dark" />
            <Text h1 className={ styles.title }>CODE</Text>
            <Collapse.Group style={{ fontFamily: "var(--monoMediumFont)" }}>
                <Collapse title="Modern JAMStack website">
                    Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.

                    Pr1mer stays in tune with the times, that's why we develop complete sites with this architecture so that we don't have to worry about reliability, scalability, and performance.
                </Collapse>
                <Collapse title="Mobile apps">
                    Mobile apps have revolutionized the way content is consumed. Today, having an app or a site has become indispensable for any company. Pr1mer develops apps for iOS and macOS of very high quality allowing you to get closer to your users.
                </Collapse>
                <Collapse title="Backend infrastructure">
                    A Jamstack deployment doesn’t run on a traditional setup of origin servers. Instead, automated deployments are used to push sites directly to the Edge / CDN.

                    Pr1mer only chooses suppliers that adapt to this architecture. This makes your site/app extremely fast, reliable, secure and also very cheap to maintain.
                </Collapse>
            </Collapse.Group>
            </>,
        deploy: <>
                <img src={ "/img/Deploy.svg" } width={140} height={100} className={ styles.s2img } />
                <Divider type="dark" />
                <Text h1 className={ styles.title }>DEPLOY</Text>
                <Collapse.Group style={{ fontFamily: "var(--monoMediumFont)" }}>
                    <Collapse title="Automatic scaling">
                        We use serverless computing that allows developers to purchase backend services on a flexible "pay-as-you-go" basis, which means developers only have to pay for the services they use. It's like switching from a cell phone data plan with a fixed monthly limit to a plan that only charges for each byte of data actually used.

                        This means that if one day you have a traffic peak, you will only pay for what you use.
                    </Collapse>
                    <Collapse title="High performance global network">
                        We run our services on the fastest edge network, milliseconds from end users – up to 115% faster than competing platforms. This network help us making sure everything remains fast, secure but also to stay ahead of the curve by supporting for the latest web standards with HTTP/3, QUIC, image compression out of the box, and more.
                    </Collapse>
                    <Collapse title="Exceptionally affordable">
                        We deploy your site/app with your budget in mind. Nobody likes to spend astronomical sums of money to maintain a site, that's why we try to offer the lowest possible rates according to our suppliers.
                    </Collapse>
                </Collapse.Group>
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
            <Modal {...bindings} width="45rem" className={ styles.modal }>
            <Modal.Content>
                { services[section] }
            </Modal.Content>
        </Modal>
        </div>
    </div>
}