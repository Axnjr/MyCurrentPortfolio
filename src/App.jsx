import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import AbtWork from './Abt&Work';
import Loader from './Loader';
import Menu from './Menu';
import SmoothScroll from './Smooth';
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
		["red", "white"],
		// ["#372595","white"],
		// ["black", "red"],
		["#FFFF33", "black"],
		// ["black", "#FFFF33"],
		// ["black", "#fd900f"],
		["#fd900f", "black"],
		// ["black", "#ccfe01"],
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
						<a href='https://github.com/Axnjr'><p>Github</p></a>
						<a href='https://twitter.com/axnsscode'><p>Twitter</p></a>
						<a href='https://www.linkedin.com/in/yakshit/'><p>LinkedIn</p></a>
						<a href="mailto:yakshitchhipa@gmail.com"><p>Mail</p></a>
						<a href='https://drive.google.com/file/d/17cjSxZThVkTTeM5gXgMCTuqfgBY86XkC/view'><p>Resume</p></a>
					</div>
					<div className='hamburger-menu-button'>
						<section style={{ display: "block" }} onClick={MenuAppear}>
							<div></div>
							<div></div>
							<div></div>
						</section>
						<p style={{ fontSize: "1.3rem" }} onClick={HandleSwitch}>MODES</p>
					</div>
				</nav>
				<Menu bg={bg} col={col} handleSwitch={HandleSwitch} />
				<SmoothScroll>
					<main style={{ backgroundColor: bg, color: col }} ref={main} id="hi">
						<div className='fancy-content-wrapper'>
							<div>
								<h1 className='fancy-h1'>
									<SubElements text="Creative" element="span" class_of_element="fancy-character" />
								</h1>
								<p onClick={HandleSwitch}>Modes</p>
							</div>
							<div className='line'></div>
							<div>
								<a><p>Keep</p></a>
								<h1 className='fancy-h1'>
									<SubElements text="Fullstack" element="span" class_of_element="fancy-character" />
								</h1>
							</div>
							<div className='line'></div>
							<div>
								<h1 className='fancy-h1'>
									<SubElements text="Developer, &" element="span" class_of_element="fancy-character" />
								</h1>
								<a><p>Scrolling</p></a>
							</div>
							<div className='line'></div>
							<div>
								<a><p>©2024</p></a>
								<h1 className='fancy-h1'>
									<SubElements text="Engineer" element="span" class_of_element="fancy-character" />
								</h1>
							</div>
							<div className='line'></div>
						</div>
					</main>
					<AbtWork bg={col} col={bg} />
				</SmoothScroll>
			</div>
		</>
	)
}
