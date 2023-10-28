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
        projects: [
            {
                img: "bigBytes",
                title: "Big Bytes Competition - Fraud Detection",
                body: (
                    <>
                        We presented an ML model to detect and a business
                        solution to solve credit card fraud. <br />
                        Achieved First Runners Up across all universities in
                        Singapore. <br />
                        Check out the{" "}
                        {link(
                            "Solution",
                            "https://github.com/shubhamperiwal/fraud_detection"
                        )}
                    </>
                ),
            },
            {
                img: "covestro",
                title: "Covestro Competition - Transfer Learning",
                body: (
                    <>
                        We built a model that learns from 190 images and
                        predicts the product quality for 100 other images <br />
                        Achieved 1st prize in CMU and 2nd overall across teams
                        from US, Germany, and China. <br />
                        Check out the{" "}
                        {link(
                            "Article",
                            "https://www.covestro.us/media/news-releases/2019-news-releases/2019-11-11-covestro-international-data-science-hackathon?fbclid=IwAR1O8Yg5UGR4A-T0gBKtj8mBA3d-qaHARogakc6ATko6nfNBYCM2yn05kTI"
                        )}
                    </>
                ),
            },
            {
                img: "fyp",
                title: "Final Year Project - Web development",
                body: (
                    <>
                        Build a website which lets companies upload annual
                        reports and users search and compare keywords across
                        different reports of different years. <br />
                        Received endorsements from MAS and SGX. <br />
                        Check out the details{" "}
                        {link(
                            "here",
                            "https://wiki.smu.edu.sg/is480/IS480_Team_wiki:_2018T1_Kodigo"
                        )}
                    </>
                ),
            },
            {
                img: "geospatial",
                title: "Geospatial Analytics Project",
                body: (
                    <>
                        Our project would like to develop a geographical
                        accessibility and spatial interaction model to study the
                        accessibility of HDB units to facilities in Singapore.{" "}
                        <br />
                        Check out our{" "}
                        {link(
                            "poster",
                            "https://wiki.smu.edu.sg/1819t2is415/XccessPoint_Poster"
                        )}
                    </>
                ),
            },
            {
                img: "devanagari",
                title: "Handwriting Recognition - Hindi",
                body: (
                    <>
                        Developed a Handwriting Recognition tool which can
                        recognize the drawing and return the character. <br />
                        Here is the GitHub{" "}
                        {link(
                            "link",
                            "https://github.com/shubhamperiwal/devanagari_recognition"
                        )}
                    </>
                ),
            },
            {
                img: "emojinator",
                title: "Detect and display Emojis",
                body: (
                    <>
                        Developed a tool which recognizes emojis using hand
                        gestures. <br />
                        Check out the GitHub{" "}
                        {link(
                            "link",
                            "https://github.com/shubhamperiwal/emojinator"
                        )}
                    </>
                ),
            },
        ],
        certificates: [
            {
                img: "cfa",
                title: "CFA Level 2",
                issuer: "CFA",
                issueDate: "Jan 2023",
                link:
                    "https://www.dropbox.com/s/6hqa0xcn8p6gj54/CFALevel2.pdf?dl=0",
                body: (
                    <>
                        Cleared CFA Level 2 in the first attempt. <br/>
                        View the Exam results{" "}
                        {link(
                            "here",
                            "https://www.dropbox.com/s/6hqa0xcn8p6gj54/CFALevel2.pdf?dl=0"
                        )}
                    </>
                ),
            },
            {
                img: "cfa",
                title: "CFA Level 1",
                issuer: "CFA",
                issueDate: "Jan 2022",
                link:
                    "https://www.dropbox.com/scl/fi/qvesx6cfd2l8rfo8yu82u/CFALevel1.pdf?rlkey=9q6ntoc6g4pkp1kkkupcaopeo&dl=0",
                body: (
                    <>
                        Cleared CFA Level 1 with greater than 90th percentile. <br/>
                        View the Exam results{" "}
                        {link(
                            "here",
                            "https://www.dropbox.com/scl/fi/qvesx6cfd2l8rfo8yu82u/CFALevel1.pdf?rlkey=9q6ntoc6g4pkp1kkkupcaopeo&dl=0"
                        )}
                    </>
                ),
            },
            {
                img: "awsCloud",
                title: "Certified Cloud Practitioner",
                issuer: "AWS",
                issueDate: "Apr 2021",
                link:
                    "https://www.credly.com/badges/77664dcf-fd6f-4c25-99b1-31070dbef5bc?source=linked_in_profile",
                body: (
                    <>
                        A high level overview on all the features that AWS has
                        to offer. <br />
                        View the certificate details{" "}
                        {link(
                            "here",
                            "https://aws.amazon.com/certification/certified-cloud-practitioner/"
                        )}
                    </>
                ),
            },
            {
                img: "dsNano",
                title: "Data Science Nanodegree",
                issuer: "Udacity",
                issueDate: "Mar 2021",
                link:
                    "https://www.dropbox.com/s/lisvtkh4s7mrhix/UdacityDSNanodegree.pdf?dl=0",
                body: (
                    <>
                        Run data pipelines, build recommendation systems, and
                        deploy solutions to the cloud. <br />
                        View course details{" "}
                        {link(
                            "here",
                            "https://www.udacity.com/course/data-scientist-nanodegree--nd025"
                        )}
                    </>
                ),
            },
            {
                img: "flutter",
                title: "Flutter and Firebase App Dev",
                issuer: "Udemy",
                issueDate: "Jun 2021",
                link:
                    "https://www.dropbox.com/s/ydxh6fn5satejyo/UdemyAppCertificate.pdf?dl=0",
                body: (
                    <>
                        Run data pipelines, build recommendation systems, and
                        deploy solutions to the cloud. <br />
                        View course details{" "}
                        {link(
                            "here",
                            "https://www.udemy.com/course/flutter-with-firebase/"
                        )}
                    </>
                ),
            },
            {
                img: "mlPython",
                title: "Machine Learning in Python",
                issuer: "Eckovation",
                issueDate: "2019",
                link:
                    "https://www.dropbox.com/s/uas0e2r03jxe3i4/Eckovation_Certificate.pdf?dl=0",
                body: (
                    <>
                        Advanced ML using Python and 4 real life projects <br />
                        View course details{" "}
                        {link(
                            "here",
                            "https://www.eckovation.com/course/machine-learning-value-package"
                        )}
                    </>
                ),
            },
            {
                img: "kdb",
                title: "Kdb+ Introductory Certificate",
                issuer: "KX",
                issueDate: "Apr 2019",
                link:
                    "https://www.dropbox.com/s/tj1k84mt917tz5u/Kx_Certificate.pdf?dl=0",
                body:
                    "Learned Kdb+ on a 2-day workshop in Singapore Management University.",
            },
            {
                img: "mensa",
                title: "Mensa Admission",
                issuer: "Mensa",
                issueDate: "Feb 2018",
                link:
                    "https://www.dropbox.com/s/syk7bnpzchaccj4/Mensa_Certificate.pdf?dl=0",
                body:
                    "Achieved 99 percentile in Mensa Admissions Test.",
            },
        ],
    };
}
