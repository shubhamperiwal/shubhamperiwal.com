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

var bevArticleLink =
    "https://bondevalue.com/news/rating-agencies-exacerbate-covid-crisis-for-sovereigns/";
var bevImageLink =
    "https://bondevalue.com/wp-content/uploads/2020/07/Rating-Actions-on-Sovereigns-Featured-Image-1.png";

export default function () {
    return {
        work: [
            {
                date: "Sep 2020 - Present",
                img: "yojee",
                title: "Yojee",
                subtitle: "Data Analyst",
                description: (
                    <>
                        <br />
                        Highlight:
                        <br />
                        As the solo Data Analyst in the team, I was responsible
                        for building the end to end pipeline for operations
                        analytics at Yojee. This included ETL processing done on
                        AWS Redshift, creating reports and dashboards using a
                        data model approach on Looker, product documentation,
                        and performance monitoring.
                        <br />
                        <br />
                        Main Responsibilities:
                        <ul>
                            <li>
                                Conducting full lifecycle of analytics projects,
                                while ensuring efficiency and data integrity
                            </li>
                            <li>
                                Tracking KPIs and supply chain performance along
                                first mile, linehaul and last mile and providing
                                operational insights to various stakeholders.
                            </li>
                            <li>
                                Building a Google Analytics ecosystem to track
                                Website Analytics
                            </li>
                        </ul>
                    </>
                ),
                tags: [
                    "Operations Analytics",
                    "AWS Redshift",
                    "Looker",
                    "PostgreSQL",
                ],
            },
            {
                date: "May - July 2020",
                img: "bev",
                title: "BondEValue",
                subtitle: "Information Services Analyst",
                description: (
                    <>
                        <br />
                        <ul>
                            <li>
                                Built up LinkedIn, Facebook, and Google Ads
                                Digital Marketing initiatives
                            </li>
                            <li>
                                Compiled the daily newsletter; Built a glossary
                                of fixed income terms; Curated articles on the
                                impact of COVID-19 on bond markets
                            </li>
                            <li>
                                Automated the extraction of daily bond rating
                                changes using Web Scraping; Built a model to
                                filter news articles related to bonds using
                                Python
                            </li>
                        </ul>
                        In this editorial attached below, my colleague and I
                        summarized the rating actions taken by Moody's, Fitch
                        and S&P between February 1, 2020 and July 21, 2020.
                        <br /> <br/>
                        <a
                            href={bevArticleLink}
                            target="_blank"
                            style={{ marginLeft: "40px" }}
                        >
                            <img
                                src={bevImageLink}
                                alt="BondEValue Article"
                                style={{ maxHeight: "150px" }}
                            />
                        </a>
                    </>
                ),
                tags: [
                    "Content Creation",
                    "Data Visualisation",
                    "Fixed Income",
                ],
            },
            {
                date: "Jan - Apr 2020",
                img: "pg",
                title: "Procter and Gamble",
                subtitle: "IT Business Analyst Intern",
                description: (
                    <>
                        <br />
                        Identified key business drivers to forecast what drives volume
                        for haircare brands and sub-brands in the APAC markets given 
                        pricing, media, distribution, and sales fundamentals data. It helped 
                        the team to track the execution of key business driver adjustments 
                        and alert against unexpected market or competitive changes. 
                        It also helped the team answer very important questions like:
                        <ul>
                        <br />
                            <li>
                                Which feature is most efficient? 
                            </li>
                            <li>
                                Where should they focus their distribution efforts?
                            </li>
                            <li>
                                Which brands are price elastic, and which ones should have promotions?
                            </li>
                        </ul>
                    </>
                ),
                tags: ["Statistical Modelling", "Knime", "Python"],
            },
            {
                date: "May 2019 – Nov 2019",
                img: "expedia",
                title: "Expedia Group",
                subtitle: "Search Engine Marketing Data Analyst Intern",
                description: (
                    <>
                        <br />
                        <ul>
                            <li>
                                Nominated by my manager as the “Best Team
                                Player”
                            </li>
                            <li>
                                Built a data pipeline to track important SEM
                                KPIs to maximize ROI for paid search campaigns
                                across multiple platforms using SQL, Python and
                                Visualization tools
                            </li>
                            <li>
                                Established automated dashboards to extract
                                value from ad relevance analysis and NLP
                                analysis on ad copies using python
                            </li>
                        </ul>
                    </>
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
                    <>
                        <br />
                        <ul>
                            <li>
                                Currently pursuing a professional credential
                                offered by MIT consisting of 5 online courses on
                                logistics and supply chain management
                            </li>
                            <li>
                                Courses Covered: Supply Chain Analytics, Supply
                                Chain Foundations, Supply Chain Design, Supply
                                Chain Dynamics, Supply Chain Technology and
                                Systems
                            </li>
                        </ul>
                    </>
                ),
                tags: [],
            },
            {
                date: "2016 - 2020",
                img: "smu",
                title: "Singapore Management University",
                subtitle: "BSc. in Economics and Analytics",
                description: (
                    <>
                        <br />
                            Bachelor of Science (Economics) and Analytics
                            (Advanced Analytics Track)
                        <ul>
                            <li>
                                {bold("Research Assistant:")} Assisted Professor
                                Swapna with research on the application of Text
                                Analytics- with Legal data and Class Reflection
                                data
                            </li>
                            <li>
                                {bold("Teaching Assistant:")}Analytics
                                Foundations, Macroeconomics, Economics &
                                Society, Machine Learning & Financial
                                Application, Leading Digital Transformation
                            </li>
                            <li>
                                {bold("Leadership:")} Head of Curriculum at SMU
                                Business Intelligence and Analytics Club ,
                                Deputy Academic and Welfare Secretary at SMU
                                Students’ Association
                            </li>
                            <li>
                                {bold("Other Activities and Societies:")} SMU
                                Conjunct Consulting, SMU Emerging Markets
                            </li>
                        </ul>
                    </>
                ),
                tags: [],
            },
        ],
    };
}
