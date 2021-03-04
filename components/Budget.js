import { Card, Row, Spacer, Text, Tooltip } from "@geist-ui/react";
import Slider from "./Low/Slider/Slider";
import styles from "../styles/Budget.module.scss"
import { useState } from "react";
import { Check, Info } from "@geist-ui/react-icons";

export default function Budget() {
    const [budget, setBudget] = useState(4)
    const marks = [150, 250, 350, 450, 650, 1000, 2000].map(e => String(e) + "$")

    const features = {
        "150$": [{ 
            name: "Consulting", 
            info: "We'll discuss with you on how you can improve your website or mobile app"
        }],
        "250$": [{
            name: "Branding & Identity",
            info: "We'll help you building your brand's identity"
        }, {
            name: "Small Website / App design",
            info: "We'll help you design your website/app (small, less than 5 pages)",
            inferior: true
        }],
        "350$": [{
            name: "Landing page",
            info: "We'll design, code and help you deploy a landing page",
            inferior: true
        }],
        "450$": [{
            name: "Medium Website/App design",
            info: "We'll help you design your website/app (medium, around 5 pages or with limited dynamic functionalities)",
            inferior: true
        }],
        "650$": [{
            name: "Medium website",
            info: "We'll design, code and help you deploy your medium website",
            inferior: true
        }],
        "1000$": [{
            name: "Complex website",
            info: "We'll design, code and help you deploy your complex website (ex: e-commerce)",
            inferior: true
        }, {
            name: "Cost effective hosting and deployment",
            info: "We'll discuss with you on how we can optimize your costs"
        }],
        "2000$": [{
            name: "Mobile app",
            info: "We'll design, code and help you deploy your mobile app"
        }, {
            name: "Landing page / Medium Website offered",
            info: "We'll create a website for your app to improve your presence online"
        }]
    }

    function getFeatures(budget) {
        let f = [];
        if (budget >= 2) {
            const keys = marks.slice(0, budget - 1);
            console.log({ keys })
            f = keys.map(i => {
                const avantages = features[i].filter(a => a.inferior !== true)
                if (avantages == []) { return null }
                return avantages
            }).filter(x => x) // Removes null
        }

        f.push(...features[marks[budget - 1]])

        return f.flat()
    }

    return <Card shadow className={ styles.budget }>
        <Text h3>What's your budget?</Text>
        <Spacer y={1} />
        <Slider className={ styles.slider } step={1} min={1} max={7} value={budget} onChange={setBudget} marks={marks}/>
        <Spacer y={3} />
        <Text h2>For {marks[budget - 1]}, you get<sup style={{ fontSize: "18px", opacity: .5 }}>*</sup>:</Text>
        {
            getFeatures(budget).map(f => <Row style={{ marginBottom: '15px' }}>
                <Check />
                <Text b style={{ marginLeft: '15px' }}>{ f.name }</Text>
                <Tooltip text={ f.info } type="dark" style={{ marginTop: '3px', marginLeft: '10px' }}>
                    <Info size={16} />
                </Tooltip>
                </Row>)
        }
        <Text small type="secondary">*: The cost displayed here is only an estimate. Contact us to get a better idea of the price.</Text>
    </Card>
}