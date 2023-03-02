import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import AbtWork from './Abt&Work';
import Loader from './Loader';
import Menu from './Menu';
import { MenuAppear, FancyHeadingMover, SubElements } from "./Utilities.jsx"


export default function Home() {

	const main = useRef(null)
	const [bg, setBg] = useState("black");
	const [col, setCol] = useState("white");
	const [switchClicked, setSwitchClicked] = useState(0);

	FancyHeadingMover()

	useEffect(() => {
		document.body.style.backgroundColor = bg;
		document.body.style.color = col;
		gsap.context(() => {
			gsap.to(".line", {
				width: "100vw",
				duration: "1",
				delay: "4"
			})
			gsap.to(".fancy-character", {
				y: "-50vw",
				duration: 0.5,
				stagger: .05,
				delay: "4.2"
			})
			gsap.to("main div p", {
				opacity: 1,
				duration: 0.8,
				stagger: 0.05,
				delay: 4.5
			})
		}, main)
	}, [bg, col])

	let bgArray = [
		["white", "black"],
		["red", "black"],
		["black", "red"],
		["#FFFF33", "black"],
		["black", "#FFFF33"],
		["black", "#fd900f"],
		["#fd900f", "black"],
		["black", "#ccfe01"],
		["#ccfe01", "black"],
		["yellow", "blue"],
		["blue", "yellow"],
		["black", "white"],
	];

	function HandleSwitch() {
		setBg(x => x = bgArray[switchClicked][0]);
		setCol(x => x = bgArray[switchClicked][1]);
		if (switchClicked < bgArray.length - 1) setSwitchClicked(sw => sw + 1);
		if (switchClicked === bgArray.length - 1) setSwitchClicked(sw => sw = 0);
	}

	return (
		<>
			<Loader />
			<div className='WRAPPER'>
				<nav style={{ backgroundColor: bg }}>
					<a href='#'><h1>Axn.</h1></a>
					<div className='nav-list'>
						<p onClick={HandleSwitch}>Modes</p>
						<a href='#abt'><p>About</p></a>
						<a href='#pro'><p>Works</p></a>
						<a href='https://github.com/Axnjr'><p>Github</p></a>
						<a href='https://www.linkedin.com/in/yakshit/'><p>LinkedIn</p></a>
						<a href="mailto:yakshitchhipa@gmail.com"><p>Mail</p></a>
						<a href='#'><p>Resume</p></a>
					</div>
					<div className='hamburger-menu-button' onClick={MenuAppear}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</nav>
				<Menu bg={bg} col={col} handleSwitch={HandleSwitch} />
				<main ref={main} id="hi">
					<div className='fancy-content-wrapper'>
						<div>
							<h1 className='fancy-h1'>
								<SubElements text="Creative" element="span" class_of_element="fancy-character" />
							</h1>
							<p onClick={HandleSwitch}>Modes</p>
						</div>
						<div className='line'></div>
						<div>
							<a href='#abt'><p>Projects</p></a>
							<h1 className='fancy-h1'>
								<SubElements text="Frontend" element="span" class_of_element="fancy-character" />
							</h1>
						</div>
						<div className='line'></div>
						<div>
							<h1 className='fancy-h1'>
								<SubElements text="Developer, &" element="span" class_of_element="fancy-character" />
							</h1>
							<a href='#pro'><p>Contact</p></a>
						</div>
						<div className='line'></div>
						<div>
							<a href='#end'><p>©2023</p></a>
							<h1 className='fancy-h1'>
								<SubElements text="Engineer" element="span" class_of_element="fancy-character" />
							</h1>
						</div>
						<div className='line'></div>
					</div>
				</main>
				<AbtWork bg={col} col={bg} />
			</div>
		</>
	)
}