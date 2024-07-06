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
                date: "Apr 2022 - Jun 2024",
                img: "gic",
                title: "GIC",
                subtitle: "Quantitative Strategist (Associate/AVP)",
                description: (
                    <>
                        <br />
                        Pivoting from a software developer to a quantitative strategist, I have had the pleasure of experiencing the entire
                         end to end pipeline of a systematic trading signal - from idea to trade.
                        <br /><br />
                        Steps of a systematic trading signal I've contributed to:
                        <table>
                            <tr>
                                <td><b>Idea&nbsp;&nbsp;</b> </td> <td>Researching a hypothesis for a systematic signal</td>
                            </tr>
                            <tr>
                                <td><b>Backtesting&nbsp;&nbsp;</b> </td> <td>Testing the hypothesis by backtesting the signal</td>
                            </tr>
                            <tr>
                                <td><b>Implementation &nbsp;&nbsp;</b> </td> <td>Building the pipeline to run that signal in a production environment </td>
                            </tr>
                            <tr>
                                <td><b>Execution&nbsp;&nbsp;</b> </td><td> Converting the signal's theoretical output into actual trades</td>
                            </tr>
                            <tr>
                                <td><b>Post-trade Analytics&nbsp;&nbsp;</b> </td> <td>Designing the dashboard to analyse a signal's performance and generate insights</td>
                            </tr>
                        </table>
                    </>
                ),
                tags: [
                    "Equities",
                    "Signal Research",
                    "Trade Execution",
                    "Python",
                    "R",
                ],
            },
            {
                date: "Aug 2020 - Jun 2022",
                img: "gic",
                title: "GIC",
                subtitle: "Quantitative Strategist (Analyst)",
                description: (
                    <>
                        <br />
                        Analyst in {" "}
                        <b>
                            "Fixed Income - Systematic Investments Group"
                        </b>{" "}
                        <br />
                        Sitting at the prime intersection of Finance and
                        Technology, I design and develop solutions reagrding trade execution and analytics. 
                        My solutions help the Portfolio Managers focus their time on research rather than execution<br />
                        <br />
                        Main Responsibilities:
                        <ul>
                            <li>
                                Built the trade execution platform to allow the conversion from signal to trade
                            </li>
                            <li>
                                Designed and developed risk and performance attribution framework which disrupted the team's portfolio analytics
                            </li>
                        </ul>
                    </>
                ),
                tags: [
                    "Fixed Income",
                    "ReactJS",
                    "Python",
                    "Django",
                    "Java"
                ],
            },

            {
                date: "Apr 2016 - present",
                img: "mars",
                title: "Mars International, Inc.",
                subtitle: "Head Of Technology",
                description: (
                    <>
                        <br/>
                        Managing all technology-related operations for the family business.
                        <br />
                        Main responsibilities:
                        <ul>
                            <li>
                                Design, develop, and maintain the {link(
                                    "client-facing website",
                                    "https://marsinternational.net/"
                                )}{" "} 
                            </li>
                            <li>
                                Design and develop an intuitive suite of dashboards to better assess the market and competitors
                            </li>
                            <li>
                                Build and analyse the digital marketing campaigns
                            </li>
                        </ul>
                    </>
                ),
                tags: ["Tableau", "ReactJS", "JavaScript"],
            },
            {
                date: "Jan - Feb 2020",
                img: "shopee",
                title: "Shopee",
                subtitle: "Regional Operations Intern",
                description: (
                    <>
                        <br />
                        Part of the Payments team in Regional Operations.
                        <br />
                        Main responsibilities:
                        <ul>
                            <li>
                                Wrote complex SQL queries to automate generation
                                of financial reports
                            </li>
                            <li>
                                Wrote Python scripts to streamline operational
                                processes to save man hours
                            </li>
                        </ul>
                    </>
                ),
                tags: ["SQL", "Python", "Automation"],
            },
            {
                date: "Jun 2019 – Aug 2019",
                img: "gic",
                title: "GIC",
                subtitle: "Software Developer / Data Science Intern",
                description: (
                    <>
                        <br />
                        It was a 10 week internship and I split my time between the
                        Technology Group and Internal Audit Department.
                        <ul>
                            <b>Software Development project </b>{" "}
                            <i>(5 weeks):</i>
                            <li>
                                Used <b>JavaScript</b> to develop a user
                                interface helping GIC employes create image maps
                                using drag and drop tools.
                            </li>
                            <li>
                                Used by Communications team to create internal
                                infographics.
                            </li>
                            <li>
                                Performed Load testing on our development
                                servers.
                            </li>
                            <li>
                                {" "}
                                Used HP LoadRunner to test the server and
                                provide suggestions to increase the concurrency
                                of users.
                            </li>
                        </ul>
                        <ul>
                            <b>Data Science project </b>
                            <i>(5 weeks):</i>
                            <li>
                                Responsible for introducing <b>airflow</b> to
                                the team and designing a worfklow to streamline
                                everything from ETL to feature engineering and
                                modeling
                            </li>
                            <li>
                                Use <b>python</b> Perform feature engineering on
                                raw data based on rule-based and ML-based models
                            </li>
                        </ul>
                    </>
                ),
                tags: [
                    "Feature Engineering",
                    "Airflow",
                    "Python",
                    "JavaScript",
                    ".NET",
                ],
            },
            {
                date: "Jul 2018 - Mar 2019",
                img: "hwa",
                title: "Hackwagon Academy",
                subtitle: "Teaching assistant",
                description: (
                    <>
                        <br />
                        Teaching Assistant for DS101 and DS102 <br />
                        <ul>
                            <li>
                                DS101 (Data Science 101) is a course on
                                Introduction to Python, which included numpy and
                                pandas
                            </li>
                            <li>
                                DS102 (Data Science 102) is a course on Advanced
                                Python, which includes sklearn, pandas,
                                seaborne, matplotlib, machine learning models,
                                web scraping, etc.
                            </li>
                            <li>
                                The job scope entailed aiding students during
                                classes, correcting their homeworks and
                                communicating best practices.
                            </li>
                        </ul>
                    </>
                ),
                tags: ["Python", "Data Science", "Web Scraping"],
            },
            {
                date: "Jan - Aug 2018",
                img: "cudy",
                title: "Cudy Pte Ltd",
                subtitle: "Web development Intern",
                description: (
                    <>
                        <br />
                        Joined a fledgling startup. Worked in a team of 4 to
                        develop an EdTech paltform where studens and teachers
                        can conduct online classes <br />
                        Main responsibilities:
                        <ul>
                            <li>
                                Developed the database schema, backend logic,
                                and the front-end integration of multiple
                                features{" "}
                            </li>
                            <li>
                                Within a span of a few weeks, we were able to go
                                live
                            </li>
                        </ul>
                    </>
                ),
                tags: ["SQL", "JavaScript", "PHP"],
            },
        ],
        education: [
            {
                date: "2024 - 2026",
                img: "iima",
                title: "IIM Ahmedabad",
                subtitle: "Post Graduate Programme",
                description: (
                    <> <br/>
                        Writing my story here.
                    </>
                ),
                tags: [],
            },
            {
                date: "2016 - 2020",
                img: "smu",
                title: "Singapore Management University",
                subtitle: "BSc. in Information Systems and Analytics",
                description: (
                    <>
                        <br />
                        <b>Highlight Courses:</b> Computational Thinking, Data
                        Management, Software Engineering, Financial Accounting,
                        Statistical Programming, Text Mining, Intro to AI,
                        Entrepreneurship Practicuum <br />
                        <br />
                        <b>Achievements:</b>
                        <ul>
                            <li>Graduated Summa cum Laude</li>
                            <li>Dean's List AY 2017/18</li>
                            <li>Dean's List AY 2018/19</li>
                        </ul>
                        <b>Final year project: </b>
                        <ul>
                            <li>
                                Worked in a team of 6 to build a{" "}
                                {link(
                                    "platform",
                                    "https://explorer.blacksunplc.com/"
                                )}{" "}
                                which lets companies upload annual reports and
                                users search and compare keywords across
                                different reports of different years.
                            </li>
                            <li>
                                Built an analytics platform to monitor
                                user-behavior
                            </li>
                            <li>Received endorsements from MAS and SGX</li>
                        </ul>
                        <b>Beyond Curriculars:</b>
                        <ul>
                            <li>
                                Teaching Assistant for:
                                <ul>
                                    <li>
                                        Customer Focused Data Analytics -
                                        Postgraduate module
                                    </li>
                                    <li>
                                        AI Planning and Decision Making -
                                        Postgraduate module
                                    </li>
                                    <li>
                                        Programming with Data - Postgraduate
                                        module
                                    </li>
                                    <li>
                                        Spreadsheet Modelling and Analytics -
                                        Undergraduate module
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Executive Committee - SMU Business Intelligence
                                and Analytics
                            </li>
                        </ul>
                    </>
                ),
                tags: [],
            },
            {
                date: "Aug - Dec 2019",
                img: "cmu",
                title: "Carnegie Mellon University",
                subtitle: "Exchange Programme, Information Technology",
                description: (
                    <>
                        Went to Carnegie Mellon University for one semester as
                        part of a student exchange programme. <br />
                        <b>Highlight Courses</b>
                        <ul>
                            <li>
                                <b>Mobile app development in iOS</b> - Used
                                Swift and XCode to build a mobile app{" "}
                            </li>
                            <li>
                                <b>Practical Data Science</b> - Gained a deeper
                                understanding of the mathematics behind
                                algorithms
                            </li>
                            <li>
                                <b>Methods for Statistics and Data Science</b> -
                                Used R to create statistical models
                            </li>
                        </ul>
                        <b>Extra Curriculars</b>
                        <ul>
                            <li>
                                Participated in a{" "}
                                <b>global data science hackathon solving</b>{" "}
                                real world problems. We stood first in CMU and
                                second across the USA, China and Germany.
                            </li>
                            <li>
                                Our team won the prize for{" "}
                                <b>'Best app for startups'</b> during our final
                                presentation for 'Mobile app development in iOS'
                            </li>
                        </ul>
                    </>
                ),
                tags: [],
            },
        ],
    };
}
