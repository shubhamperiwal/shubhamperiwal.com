// use this function when you want to embolden a piece of text
function bold(text) {
    return <b>{text}</b>;
}

// use this function when you want to hyperlink a piece of text
function link(text, link) {
    return (
        <a href={link} target="_blank">
            {text}
        </a>
    );
}
export default function () {
    return {
        work: [
            {
                date: "Sep 2020 - Present",
                img: "yojee",
                title: "Yojee",
                subtitle: "Data Analyst",
                description: (
                    <ul>
                        As the solo Data Analyst in the team, collaboration and
                        project management are key aspects of my daily
                        responsibilities, which also include
                        <li>
                            Conducting full lifecycle of analytics projects,
                            including ETL processes, extracting and manipulating
                            data, documentation to design and execution
                        </li>
                        <li>
                            Ensuring efficiency and data integrity in reporting,
                            along with good performance
                        </li>
                        <li>
                            Leveraging data to provide operational insights to
                            dispatchers
                        </li>
                        <li>
                            Tracking KPIs and supply chain performance along
                            first mile, linehaul and last mile
                        </li>
                        <li>
                            Building a Google Analytics ecosystem to track
                            Website Analytics"
                        </li>
                    </ul>
                ),
                tags: ["SQL", "Redshift"],
            },
            {
                date: "May - July 2020",
                img: "bev",
                title: "BondEValue",
                subtitle: "Information Services Analyst Intern",
                description: (
                    <ul>
                        <li>
                            Built up LinkedIn, Facebook, and{" "}
                            {bold("Google Ads ")}
                            Digital Marketing initiatives
                        </li>
                        <li>
                            {" "}
                            {bold("Content creation")}- Compiled the daily
                            newsletter; Built a glossary of fixed income terms;
                            Curated articles on the impact of COVID-19 on bond
                            markets
                        </li>
                        <li>
                            {" "}
                            Automated the extraction of daily bond rating
                            changes using {bold("Web Scraping")}, and built a
                            model to filter relevant bond news articles using
                            Python
                        </li>
                    </ul>
                ),
                tags: ["Pain", "Suffering"],
            },
            {
                date: "Jan - Apr 2020",
                img: "pg",
                title: "Procter and Gamble",
                subtitle: "IT Business Analyst Intern",
                description: (
                    <ul>
                        <li>
                            Identified key business drivers to forecast monthly
                            demand for haircare products for APAC markets given
                            pricing, media, distribution, and sales fundamentals
                            data"
                        </li>
                    </ul>
                ),
                tags: ["Pain", "Suffering"],
            },
            {
                date: "May 2019 – Nov 2019",
                img: "expedia",
                title: "Expedia Group",
                subtitle: "Search Engine Marketing Data Analyst Intern",
                description: (
                    <ul>
                        <li>
                            Nominated by my manager as the “Best Team Player”
                        </li>
                        <li>
                            Built a data pipeline to track important SEM KPIs to
                            maximize ROI for paid search campaigns across
                            multiple platforms using SQL, Python and
                            Visualization tools
                        </li>
                        <li>
                            Established automated dashboards to extract value
                            from ad relevance analysis and NLP analysis on ad
                            copies using python
                        </li>
                    </ul>
                ),
                tags: ["Pain", "Suffering"],
            },
        ],
        education: [
            {
                date: "2020 - 2021",
                img: "mit",
                title: "Massachusetts Institute of Technology on EdX",
                subtitle: "Micro Masters’ Program, Supply Chain Management",
                description: (
                    <ul>
                        <li>
                            Currently pursuing a professional credential offered
                            by MIT consisting of 5 online courses on logistics
                            and supply chain management
                        </li>
                        <li>
                            Courses Covered: Supply Chain Analytics, Supply
                            Chain Foundations, Supply Chain Design, Supply Chain
                            Dynamics, Supply Chain Technology and Systems
                        </li>
                    </ul>
                ),
                tags: [],
            },
            {
                date: "2016 - 2020",
                img: "smu",
                title: "Singapore Management University",
                subtitle: "BSc. in Economics and Analytics",
                description: (
                    <ul>
                        Bachelor of Science (Economics) and Analytics (Advanced
                        Analytics Track)
                        <li>
                            {bold("Research Assistant:")} Assisted Professor
                            Swapna with research on the application of Text
                            Analytics- with Legal data and Class Reflection data
                        </li>
                        <li>
                            {bold("Teaching Assistant:")}Analytics Foundations,
                            Macroeconomics, Economics & Society, Machine
                            Learning & Financial Application, Leading Digital
                            Transformation
                        </li>
                        <li>
                            {bold("Leadership:")} Head of Curriculum at{" "}
                            {link(
                                "SMU Business Intelligence and Analytics Club",
                                "https://www.smubia.org/"
                            )}
                            , Deputy Academic and Welfare Secretary at{" "}
                            {link(
                                "SMU Students’ Association",
                                "https://www.smusa.sg/"
                            )}
                        </li>
                        <li>
                            {bold("Other Activities and Societies:")} SMU
                            Conjunct Consulting, SMU Emerging Markets
                        </li>
                    </ul>
                ),
                tags: [],
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
    };
}
