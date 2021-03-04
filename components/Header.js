import { Col, Grid, Text } from "@geist-ui/react";
import styles from "../styles/Header.module.scss"
import CustomButton from "./Low/Button";
import TypeWriter from "./Low/TypeWriter"
export default function Header({ controller, projects }) {
    return <Grid.Container className={ styles.header }>
        <Grid xs={24} md={16} className={ styles.taglineContainer }>
            <Text h1 className={ styles.tagline }>
                <TypeWriter heading="Pr1mer" messages={[
                    "develops and maintain high quality software.",
                    "designs and create beautiful handcrafted websites.",
                    "code and sells mobile apps used by thousands of people.",
                    "helps companies and individuals on the web."
                ]} />
            </Text>
        </Grid>
        <Grid xs={24} md={8} className={ styles.buttons }>
            <a href="/contact"><CustomButton type="secondary">Contact Us</CustomButton></a>
            <CustomButton onClick={() => controller.current.state.controller.scrollTo("#projects") }>See our projects</CustomButton>
        </Grid>
    </Grid.Container>
}