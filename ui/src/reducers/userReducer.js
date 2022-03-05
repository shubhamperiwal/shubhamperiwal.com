import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faLaptopCode, faChartPie, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
export default function () {
    return {
        firstName: "Shubham",
        lasttName: "Periwal",
        about: {
            description: (<>
                ANALYTICAL. CURIOUS. HUMOROUS. <br/><br/>
                
                Shubham is a tech enthusiast whose creative zone lies at the intersection of technology {<FontAwesomeIcon icon={faLaptopCode}/>} and business {<FontAwesomeIcon icon={faBusinessTime}/>} <br/>

                His main interests are in the fields of Software Development as well as Data Analytics {<FontAwesomeIcon icon={faChartPie}/>}<br/>

                He likes exploring new technical skills and keeping himself updated by being enrolled in multiple online courses.<br/>
                He also enjoys imparting his knowledge to others and aide them in any way possible.<br/>

                Something that piques his interest includes solving riddles, puzzles {<FontAwesomeIcon icon={faPuzzlePiece}/>} and brain teasers. He loves everything from word scrambles to mathematical puzzles like Sudoku.<br/><br/>

                Please feel free to get in touch with him if you're interested in anything from <b>development</b> to <b>entrepreneurship. </b><br/><br/>
                
            </>),

            interests: [
                {
                    title: "Reading",
                    description: "Always striving to improve myself",
                },
                {
                    title: "Technology",
                    description: "First in line to test and learn new technology",
                },
                {
                    title: "Working Out",
                    description: "There isn't any better stress buster",
                },
                {
                    title: "Sports",
                    description: "Always in for any racquet sports",
                },
                {
                    title: "Running",
                    description: "Search for a run buddy...",
                },
                {
                    title: "Travelling",
                    description: "Culture shock is my favorite shock",
                },
                {
                    title: "Hiking",
                    description: "The higher the better",
                },
                {
                    title: "Blockchain",
                    description: "The coins and the underlying framework",
                },
            ],
            languages: [
                {
                    title: "Python",
                    score: 5,
                },
                {
                    title: "R",
                    score: 5,
                },
                {
                    title: "JavaScript (React | Node)",
                    score: 5,
                },
                {
                    title: "NoSQL",
                    score: 5,
                },
                {
                    title: "SQL",
                    score: 4,
                },
                {
                    title: "Java",
                    score: 4,
                },
            ],
            skills: [
                {
                    title: "Web Development",
                    score: 5,
                },
                {
                    title: "Data Analytics",
                    score: 4,
                },
                {
                    title: "Machine Learning",
                    score: 4,
                },
                {
                    title: (<>Cloud Architecture <b>(AWS) </b></>),
                    score: 3,
                },
                {
                    title: (<>App Development <b>(Flutter) </b></>),
                    score: 3,
                },
                {
                    title: (<>Workflow Management <b>(Airflow) </b></>),
                    score: 3,
                },
            ],
        },
        connect: {
            email: "mailto:shubhamperiwal98@gmail.com",
            linkedIn: "https://www.linkedin.com/in/shubhamperiwal/",
            telegram: "https://t.me/shubhamperiwal",
            gitHub: "https://github.com/shubhamperiwal",
        },
    };
}
