export default function Works({ bg, col }) {

    function ProjectDivs({ id, name, date, type, link }) {
        return (
            <a href={link}>
                <div
                    className="project-cards"
                    id={`pc${id}`}
                    onMouseEnter={() => ChnageBGFG(id, true)}
                    onMouseLeave={() => ChnageBGFG(id, false)}
                    onTouchStart={() => ChnageBGFG(id, true)}
                    onTouchEnd={() => ChnageBGFG(id, false)}>
                    <h1 id={`project-cards-h2${id}`}>{name} <span>&nbsp; - {date}</span></h1>
                    <div className="type-of-project" id={"types" + id}><span>{type}</span></div>
                </div>
            </a>
        );
    }

    const project_object = [
        [
            "2023",
            "Exponential Design Studios",
            "UI/UX, DESIGN, NEXT JS",
            "LINK PENDING",
        ],
        [
            "2022",
            "Radha Programming Lang",
            "PURE VANILA JS, CODONG",
            "https://github.com/Axnjr/Radha-Programming-Language",
        ],
        [
            "2022",
            "Sorting Algorithm Visualizer",
            "DSA, REACT, CODING",
            "https://sortalgo-visualizer.vercel.app/",
        ],
        ["2022", "User logging API", "BACKEND, REST API", "https://github.com/Axnjr/UserLoger-API-Complete-Backend"],
        [
            "2021",
            "MSN Maps",
            "DATA FETCHING ,API'S",
            "https://bright-tartufo-189e52.netlify.app/",
        ],
        [
            "2021",
            "Split Text Package",
            "NPM PACKAGE, CODING , JS ",
            "https://axnjr.github.io/SubTextJS/",
        ],
        [
            "2023",
            "Current Portfolio",
            "REACT, WEB DEV",
            "LINK PENDING",
        ],
        [
            "2021",
            "Letter Game",
            "SPEECH RECOGNITION, WEB DEV",
            "https://letter-game-nine.vercel.app/",
        ],
    ];

    function ChnageBGFG(id, bool) {
        document.querySelector(`#pc${id}`).style.backgroundColor = bool ? col : "transparent";
        document.querySelector(`#pc${id}`).style.color = bool ? bg : col;
    }

    return (
        <div className="projects" id="pro" style={{ backgroundColor: bg, color: col }}>
            <section>
                <h1>Selected Projects &nbsp; </h1>
                <h1>Selected Projects &nbsp; </h1>
                <h1>Selected Projects &nbsp; </h1>
            </section>

            <div>
                {
                    project_object.map((element, id) => {
                        return (
                            <ProjectDivs
                                key={id}
                                id={id}
                                date={element[0]}
                                name={element[1]}
                                type={element[2]}
                                link={element[3]}
                            />
                        );
                    })}
            </div>
        </div>
    )
}