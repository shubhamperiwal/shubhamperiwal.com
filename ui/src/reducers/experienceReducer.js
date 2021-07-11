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
                date: "Aug 2020 - Present",
                img: "gic",
                title: "GIC",
                subtitle: "Quantitative Strategist",
                description: (
                    <>
                        <br />
                        Highlight:
                        <br />
                        Part of{" "}
                        <b>
                            "Fixed Income - Systematic Investments Group" )
                        </b>{" "}
                        <br />
                        Sitting at the prime intersection of Finance and
                        Technology, my role is not only to build but also to
                        come up with solutions which makes the lives of
                        Portfolio Managers simpler and helps them gain
                        additional alpha <br />
                        <br />
                        Main Responsibilities:
                        <ul>
                            <li>
                                Developing internal trade execution websites
                            </li>
                            <li>
                                Building web development frameworks to apply
                                division-wide solutions
                            </li>
                            <li>
                                Automate operational tasks as much as possible
                            </li>
                        </ul>
                    </>
                ),
                tags: [
                    "Web Development",
                    "Solutions Architecture",
                    "Fixed Income",
                ],
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
                subtitle: "Software Developer cum Data Science Intern",
                description: (
                    <>
                        <br />
                        It was a 10 week internship and I split my time between
                        Enterprise Strategy and Internal Audit teams.
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
                                    "website",
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
                            <li>Sub Committee - SMU Devera</li>
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
