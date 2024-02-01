import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useInView } from "react-intersection-observer";
import { SubElements } from "./Utilities.jsx";
import Works from "./Works";
import Footer from "./Footer";

export default function AbtWork({bg,col}) {

	const about = useRef(null);
	const about2 = useRef(null);
	const {ref:abt,inView:abtIV} = useInView()
	const {ref:abt2,inView:abt2IV} = useInView()

	useEffect(() => {
		gsap.context(() => {
			if(abtIV){
				gsap.to(".fancy-character-abt",{
					opacity:1,
					delay:0.25,
					stagger:0.01,
				})
				gsap.to(".vertical-line",{
					height:"100%",
					backgroundColor:bg,
					delay:0.5,
				})
			}
		} , about )
		gsap.context(() => {
			if(abt2IV){
				gsap.to(".horizontal-line",{
					width:"100%",
					duration:1,
					backgroundColor:bg
				})
				gsap.to(".flowing-tech-stack h1",{
					opacity:1,
					duration:2,
					delay:0.5
				})
				gsap.to(".fancy-character-abt2",{
					opacity:1,
					delay:0.5,
					// duration:0.01,
					stagger:0.01
				})
			}
		} , about2 )
	})

  return (
    <>
		{/* <div id="abtCursor">Listen</div> */}
        <div>
			<div ref={about} className='self-flex' id="abt">
				<section style={{borderLeft:"none"}}></section>
				<div className="vertical-line"></div>
				<section></section>
				<div className="vertical-line"></div>
				<section style={{borderLeft:"none"}}></section>
				<div className="vertical-line"></div>
				<section></section>
				<div className="vertical-line"></div>
				<h1 ref={abt}>
					<SubElements text='A developer dedicated to crafting websites with great attention
					to scalability, performance and details, living on planet Earth, 
					based in Mumbai, India.' element="span" class_of_element="fancy-character-abt" />
				</h1>
			</div>
		</div>

       	<div ref={about2} className="bit-abt-me-wrapper">
			<div className="horizontal-line"></div>
	   		<section className="flowing-tech-stack">
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|&nbsp; Trpc &nbsp;|&nbsp; Tailwind &nbsp;| Rust &nbsp;|&nbsp; GraphQL &nbsp;| </h1>
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|&nbsp; Trpc &nbsp;|&nbsp; Tailwind &nbsp;| Rust &nbsp;|&nbsp; GraphQL &nbsp;| </h1>
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|&nbsp; Trpc &nbsp;|&nbsp; Tailwind &nbsp;| Rust &nbsp;|&nbsp; GraphQL &nbsp;| </h1>
				<h1>&nbsp; React &nbsp;|&nbsp; React-native &nbsp;|&nbsp; Next &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; nodeJs &nbsp;|&nbsp; express &nbsp;|&nbsp; Css &nbsp;|&nbsp; Gsap &nbsp;|&nbsp; Python &nbsp;|&nbsp; Trpc &nbsp;|&nbsp; Tailwind &nbsp;| Rust &nbsp;|&nbsp; GraphQL &nbsp;| </h1>
			</section>
			<div className="horizontal-line"></div>
			<div className="bit-abt-me" ref={abt2}>
				<h1>
					<SubElements text={`
						Indeed a fresher in the industry, but I already have 4+ years of experience in programming,
					 	30+ meaningful projects no clones. Above is my overflowing tech stack. I'm currently working on
						Raman IDE
					`} element="span" class_of_element="fancy-character-abt2" />
				</h1>
				<h1>
					<SubElements text={`
						I'm pursing engineering in AIML, currently in my third year of college.
						Feel free to contact me if you have a referral for me, want to collaborate on future projects,
						or have a little chat.
					`} element="span" class_of_element="fancy-character-abt2" />
				</h1>
			</div>
	   	</div>
	   	<Works bg={bg} col={col}/>
		<Footer/>
    </>
  )
}