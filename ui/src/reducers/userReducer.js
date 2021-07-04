import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBookReader, faRunning, faPalette } from "@fortawesome/free-solid-svg-icons";
export default function () {
    return {
        firstName: "Muskaan",
        lasttName: "Gupta",
        home: {
            about: (<>
                "The difference between a good painting and a great painting 
                is typically 5 strokes. And they are usually the 5 boldest strokes 
                in the painting! The question, of course, is which five strokes?" 
                - The Half of It.
                <br/>
                <br/>
                Welcome to my attempt at discovering the boldness in myself and taking
                as many canvases as I need to make those bold strokes.
                <br/>
                <br/>
            </>),
            
            experience: (<>
                I am a Data Analyst with good knowledge of Statistics, 
                Data Modelling, Visualisation techniques, and Text Analytics. 
                I love structure and order and I also stand for quality.
                <br/>
                <br/>
                I am passionate about bringing transformational change to any 
                organization, team or setting.
            </>),

            project: (<>
                Take a famous person's word for it...
                <br/>
                <br/>
                This is more than a project review blog. These reflections on the written word
                are inspired by my personal interests and musings.
                <br/>
                <br/>
                So, let's see what projects/quotes inspire me.
            </>),
        },

        about: {
            description: (<>
                ANALYTICAL. CREATIVE. ENTHUSIASTIC. <br/><br/>
                
                A curious woman but a child at heart, I am most comfortable 
                when around projects, colours or numbers. <br/>


                Self-motivated, driven, creative, and curious, I am an avid reader <FontAwesomeIcon icon={faBookReader}/> and a coffee <FontAwesomeIcon icon={faCoffee}/> enthusiast. <br/>
                I like going on runs <FontAwesomeIcon icon={faRunning}/> and painting <FontAwesomeIcon icon={faPalette}/> during my free time. <br/> I am skilled at Project Management, Data Engineering, Data Modelling,
                Visualization, Statistics and Text Analytics. With a background in Analytics, Economics problems from a multi-disciplinary approach,
                providing a unique perspective and and Market Research, I can view communicating effectively in a cross-disciplinary team.
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
