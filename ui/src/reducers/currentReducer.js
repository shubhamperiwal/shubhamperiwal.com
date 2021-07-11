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
        upcomingGoal: {
            title: "CFA Level 1 Exam",
            img: "cfa",
            description: (
                <>
                    Given that I have had no formal training in Finance
                    throughout my education, taking on CFA Level 1 will help me
                    gain the fundamentals of a <b>completely new vertical.</b>
                    <br />
                    I can gradually apply what I'm learning during my work in
                    GIC to serve them even better. <br />
                    Studying for CFA Level 1 has also helped me gain a better
                    understanding of my personal finances. <br />
                    <img
                        src={
                            "https://website-sp-images.s3.ap-southeast-1.amazonaws.com/current/nov2021.png"
                        }
                    />
                </>
            ),
        },
        currentRead: {
            title: "Tarzan Economics",
            img: "tarzan",
            description: (
                <>
                    Written by the former chief economist of Spotify. <br />{" "}
                    <br />
                    This book uses the media industry as an example to talk
                    about technological disruption and how we should not be too
                    hung up on the <i>old vine</i> and be ready to take a leap
                    to the <i>new vine</i>. <br /> <br/>
                    It also points out various biases <i>(eg: Quantification bias)</i> regarding big data and
                    other statistical analyses which we must keep in mind before
                    trusting them blindly.
                </>
            ),
        },
        latestRead: [
            {
                title: "Strategy Beyond the Hockey Stick",
                img: "hockeyStick",
                description: (
                    <i>
                        Not making big moves and making only incremental
                        improvements is a sure shot way of getting left behind
                    </i>
                ),
            },
            {
                title: "Think like a Monk",
                img: "monk",
                description: (
                    <i>
                        "It is not possible to control all external events but
                        if I simply control my mind, what need is there to
                        control external events"
                    </i>
                ),
            },
            {
                title: "No filter",
                img: "noFilter",
                description: (
                    <i>
                        Focusing on doing good things and setting values should
                        be prioritized above growth and making more money.
                    </i>
                ),
            },
        ],
    };
}
