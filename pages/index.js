import Header from "../components/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import React from "react";
import Footer from "../components/Footer";
import Work from "../components/Work";

export default function Home() {
	const PanelStyle = {
		height: "100vh",
		width: "100vw",
		position: "absolute",
		background: "var(--background)"
	}

	const controller = React.useRef(null)
	const projects = React.useRef(null)

	return <>
	<Controller loglevel={2} ref={ controller }>
		<Scene triggerHook="onLeave" duration="150%" pin>
			<Timeline wrapper={<div id="pinContainer" style={{
				height: "100vh",
    			width: "100vw",
    			overflow: "hidden",
			}} />}
			>
			<Tween from={{ x: '0%', opacity: 1 }} to={{ x: '50%', opacity: 0 }} position={0}>
				<div style={ PanelStyle }>
					<Header controller={ controller } projects={ projects }/>
				</div>
			</Tween>
			<Tween from={{ x: '-100%', opacity: 0 }} to={{ x: '0%', opacity: 1 }} position={0}>
				<div style={ PanelStyle }>
					<Section1 />
				</div>
			</Tween>
			<Tween
				from={{ y: '100%', opacity: 0 }}
				to={{ y: '0%', opacity: 1 }}
			>
				<div style={ PanelStyle }>
					<Section2 />
				</div>
			</Tween>
			</Timeline>
		</Scene>
		<Scene duration="150%" pin={ true } triggerHook="onEnter" classToggle="slide-jsx-carousel">
			<Timeline>
				<Tween
					from={{ x: '100%', y: '0%', opacity: 0, rotation: -90 }}
					to={{ x: '0%', y: '-100%', opacity: 1, rotation: 0 }}
				>
					<div style={ PanelStyle } id="projects">
						<Section3 />
					</div>
				</Tween>
				<Tween
					from={{ width: "0%", y: '-100%', x: "50%" }}
					to={{ width: '100%', y: '-100%', x: "0%" }}
				>
					<div style={{
						height: "100vh",
						width: "100vw",
						position: "absolute",
						background: "var(--background)",
						filter: "invert(1)",
						overflow: "hidden"
					}}>
						<Work />
					</div>
				</Tween>
			</Timeline>
		</Scene>
	</Controller>
	<Footer />
	</>
}