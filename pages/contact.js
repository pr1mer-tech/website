import { Button, ButtonGroup, Grid, Page, Row, Text, Tabs, useTabs, Spacer, Collapse, Link, Card, Description } from "@geist-ui/react";
import Budget from "../components/Medium/Budget";
import Footer from "../components/Footer";
import NavBar from "../components/Medium/NavBar";
import Projects from "../components/Medium/Projects";

export default function Contact() {
    const { setState, bindings } = useTabs("website")
    return <>
    <NavBar />
        <Page style={{ fontFamily: "var(--normalFont) "}}>
            <Text h1>Contact Us</Text>
            <Tabs {...bindings}>
                <Tabs.Item label="Price calculator" value="website">
                    <Spacer y={1} />
                    <Text h3>Price Calculator</Text>
                    <Text small>You can estimate your costs with the tool below. Don't hesitate to contact us, in some cases our rates may vary and you may be surprised!</Text>
                    <Spacer y={2} />
                    <Budget />
                </Tabs.Item>
                <Tabs.Item label="Information" value="information">
                    <Spacer y={1} />
                    <Text h3>Popular Questions</Text>
                    <Collapse.Group>
                        <Collapse title="Who is behind Pr1mer?">
                            Pr1mer is a constantly renewed team of independent developers, designers, and creators wishing to launch themselves in the "freelance" movement. Pr1mer provides visibility and acts as an intermediary. This system guarantees clients to have the services of experts in their fields, while allowing great flexibility.
                            <br/><br/>
                            Pr1mer was founded in 2018 by <Link href="https://arguiot.com" color underline>Arthur Guiot</Link>, a Florida Polytechnic University computer science student who wanted to make some money selling websites. Forced to see that it was hard to find customers, and for customers hard to find good developers, that Arthur decided to create Pr1mer.
                        </Collapse>
                        <Collapse title="Why should we trust you?">
                            Although Pr1mer is relatively new to the industry, we have completed several projects that speak for us:
                            <Projects active={bindings.value == "information"}/>
                            In addition, our billing system is customer friendly. Every quote is free, and you will never pay more than what we quote. Plus, no matter what your project is, we only charge for the consulting ($150) up front, and you only pay the rest if you are completely satisfied.
                        </Collapse>
                        <Collapse title="What's your process?">
                            <Text h4 style={{ fontFamily: "var(--monoFont)" }}>01. Design</Text>
                            When you place orders, you have certain requirements or ideas of what you want. That's why the first step is to understand what you are looking for. Then we go to Figma, our weapon of choice (it's a design software). We will propose you different styles, layouts, etc. and ask you for your opinion. The idea is to have a visual model of what we will do next. 
                            <Text h4 style={{ fontFamily: "var(--monoFont)" }}>02. Code</Text>
                            We use the latest technologies to stay on top of the curve. That's why our stack includes tools you may have heard of like NextJS, SwiftUI, React, or GraphQL. We try not to create "technological debt" to have minimum maintainability and maximum scalability.
                            <Text h4 style={{ fontFamily: "var(--monoFont)" }}>02. Deploy</Text>
                            We use serverless computing that allows developers to purchase backend services on a flexible "pay-as-you-go" basis, which means developers only have to pay for the services they use. It's like switching from a cell phone data plan with a fixed monthly limit to a plan that only charges for each byte of data actually used. This means that if one day you have a traffic peak, you will only pay for what you use.
                        </Collapse>
                    </Collapse.Group>
                </Tabs.Item>
            </Tabs>
            <Spacer y={2} />
            <Text h1 style={{ fontFamily: "var(--monoFont)" }}>Say Hi!</Text>
            <Text h3>Shoot us an email, reach out on social media, or send a carrier pigeon. Regardless of how, we’d love to hear from you.</Text>

            <Grid.Container gap={2}>
                <Grid xs={24} md={8}>
                    <Card>
                        <Text style={{ fontFamily: "var(--monoFont)" }}>Don't be shy! Tell us what you want</Text>
                        <Description title="Email Address" content={<Link href="mailto:sales@pr1mer.tech" color underline>sales@pr1mer.tech</Link>} />
                    </Card>
                </Grid>
                <Grid xs={24} md={8}>
                    <Card>
                        <Text style={{ fontFamily: "var(--monoFont)" }}>Want to hear from us? Follow us!</Text>
                        <Description title="Twitter" content={<Link href="https://twitter.com/pr1mertech" color underline target="_blank">@Pr1merTech</Link>} />
                    </Card>
                </Grid>
                <Grid xs={24} md={8}>
                    <Card>
                        <Text style={{ fontFamily: "var(--monoFont)" }}>You code, and want to work with us?</Text>
                        <Description title="Email address" content={<Link href="mailto:admin@pr1mer.tech" color underline>admin@pr1mer.tech</Link>} />
                    </Card>
                </Grid>
            </Grid.Container>
        </Page>
        <Footer />
    </>
}