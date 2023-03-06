import { MenuClose } from "./Utilities.jsx"
export default function Menu({bg,col,handleSwitch}) {
  return (
    <div className="menu" style={{backgroundColor:col,color:bg}} >
        <div className='nav-list-menu'>
            <p onClick={MenuClose}>
                <svg onClick={MenuClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </p>
            <p onClick={handleSwitch}>Modes</p>
            {/* <a href='#abt' onClick={MenuClose}><p>About</p></a>
						<a href='#pro' onClick={MenuClose}><p>Works</p></a> */}
            <a href='https://github.com/Axnjr'><p>Github</p></a>
            <a href='https://www.linkedin.com/in/yakshit/'><p>LinkedIn</p></a>
            <a href="mailto:yakshitchhipa@gmail.com"><p>Mail</p></a>
            <a href='https://drive.google.com/file/d/1IOwDlPfqfgFcO_hvOE7Cd3zEEaSkm9oU/view?usp=sharing'><p>Resume</p></a>
        </div>
    </div>
  )
}
