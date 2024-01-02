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
            "2024",
            "Blazze.js - Soon",
            "Backend, Core Development, Express, Nodejs, Typescript",
            ""
        ],
        [
            "2024",
            "React Interview Questions - Soon",
            "Open-source, JS, TS, Interview-prep, Currated-list",
            ""
        ],
        [
            "2023",
            "Free AI",
            "Full-Stack, SAAS, AI, API's",
            "https://github.com/Axnjr/FreeAI-APIServices",
        ],
        [
            "2023",
            "Clickk Anonymous messenger",
            "Full-Stack, Saas, Micro-service Architecture",
            "https://github.com/Axnjr/Clickk-AnonymousMessager",
        ],
        [
            "2022",
            "Radha Programming Lang",
            "Pure Vanilla JS, Core-dev",
            "https://github.com/Axnjr/Radha-Programming-Language",
        ],
        [
            "2022",
            "Sorting Algorithm Visualizer",
            "DSA, ReactJS, Core-dev",
            "https://sortalgo-visualizer.vercel.app/",
        ],
        [
            "2021",
            "MSN Maps",
            "API integration, Interactive, Vanilla-JS",
            "https://personalmsn.netlify.app/",
        ],
        [
            "2023",
            "Current Portfolio",
            "ReactJS, Web Dev, Design",
            "https://axn.vercel.app",
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

            <div className="project_container">
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