import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faLaptopCode, faChartPie, faPuzzlePiece, faTableTennis, faBookOpen } from "@fortawesome/free-solid-svg-icons";
export default function () {
    return {
        firstName: "Shubham",
        lasttName: "Periwal",
        about: {
            description: (<>
                ANALYTICAL. CURIOUS. HUMOROUS. <br/><br/>
                
                Shubham is a Fintech enthusiast. Having recently pivoted from a software developer to a quantitative strategist, he is aspiring to be accomplished in both worlds. He holds professional certifications in both Finance and Tech due to his love for lifelong learning. <br/><br/>

                He is inspired by the journeys of founders and CEOs. Combining that with his love for books, he has read many of their (auto)biographies, including Jack Ma (Alibaba), Richard Branson (Virgin), and Phil Knight (Nike), to name a few. {<FontAwesomeIcon icon={faBookOpen}/>}  <br/><br/>

                Moving beyond intellectual acuity, he is a huge sports fanatic and loves playing racquet sports like badminton, tennis, and squash. {<FontAwesomeIcon icon={faTableTennis}/>}  <br/><br/>

                Something that piques his interest includes solving riddles, puzzles {<FontAwesomeIcon icon={faPuzzlePiece}/>} and brain teasers. He loves everything from word scrambles to mathematical puzzles like Sudoku.<br/><br/>

                Please connect with him if you're interested in conversations about technology, finance, entrepreneurship, and psychology, or would just love a friendly ear.  <br/><br/>
                
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
