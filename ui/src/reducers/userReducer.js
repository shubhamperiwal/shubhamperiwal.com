import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBookReader, faRunning, faPalette } from "@fortawesome/free-solid-svg-icons";
export default function () {
    return {
        firstName: "Shubham",
        lasttName: "Periwal",
        about: {
            description: (<>
                ANALYTICAL. CURIOUS. HUMOROUS. <br/><br/>
                
                Shubham's creative comfort zone is at the intersection of technology, and business.<br/>
                
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
                    title: "JavaScript (Vanilla | React | Node)",
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
                    title: "Cloud Architecture (AWS)",
                    score: 3,
                },
                {
                    title: "App Development (Flutter)",
                    score: 3,
                },
                {
                    title: "Airflow",
                    score: 3,
                },
            ],
        },
        connect: {
            email: "mailto:shubhamperiwal98@gmail.com",
            linkedIn: "https://www.linkedin.com/in/shubhamperiwal/",
            telegram: "https://t.me/shubhamperiwal",
            gitHub: "https://github.com/shubhamperiwal98",
        },
    };
}
