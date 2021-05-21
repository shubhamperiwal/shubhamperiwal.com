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
                    description: "It takes you to a different place every time",
                },
                {
                    title: "Writing",
                    description: "Words can be both an escape and a destination",
                },
                {
                    title: "Working Out",
                    description: "For the mind, body and soul",
                },
                {
                    title: "Painting",
                    description: "As my creative outlet",
                },
                {
                    title: "Cafe Hopping",
                    description: "Because who doesn't like a good cup of coffee?",
                },
            ],
            skills: [
                {
                    title: "SQL",
                    score: 5,
                },
                {
                    title: "Python",
                    score: 5,
                },
                {
                    title: "PostgreSQL",
                    score: 5,
                },
                {
                    title: "Knime",
                    score: 4,
                },
                {
                    title: "Tableau",
                    score: 5,
                },
                {
                    title: "Holistics",
                    score: 5,
                },
            ],
            tools: [
                {
                    title: "Data Studio",
                    score: 5,
                },
                {
                    title: "Google Analytics | Ads | BigQuery",
                    score: 5,
                },
                {
                    title: "AWS Redshift",
                    score: 4,
                },
                {
                    title: "SAS EG | Miner",
                    score: 4,
                },
                {
                    title: "Stata",
                    score: 4,
                },
                {
                    title: "Procreate",
                    score: 4,
                },
                {
                    title: "Photoshop",
                    score: 4,
                },
                {
                    title: "HTML | CSS",
                    score: 4,
                },
            ],
        },
        connect: {
            email: "mailto:muskaang.2016@outlook.com",
            linkedIn: "https://www.linkedin.com/in/muskaan-gupta09/",
            telegram: "https://t.me/muskaang123",
            gitHub: "https://github.com/muskaang",
        },
    };
}
