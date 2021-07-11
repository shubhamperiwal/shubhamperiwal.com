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
                    throughout my education, taking on CFA Level 1 is a mammoth
                    task that is ahead of me. <br />
                    I also feel that it is helping me gain knowledge across a
                    completely new vertical which will be immensely helpful
                    later in life. <br />
                    <img src={"https://website-sp-images.s3.ap-southeast-1.amazonaws.com/current/nov2021.png"}/>
                </>
            ),
        },
        currentRead: {
            title: "Tarzan Economics",
            img: "tarzan",
            description: (
                <>
                    Written by the former chief economist of Spotify. <br /> <br/>
                    This book uses the media industry as an example to talk about technological disruption and how we should not be too hung up on the <i>old vine</i> and be ready to take a leap to the <i>new one</i>.
                </>
            ),
        },
        latestRead: [
            {
                title: "Strategy Beyond the Hockey Stick",
                img: "hockeyStick",
                description: <i>Not making big moves and making only incremental improvements is a sure shot way of getting left behind</i>,
            },
            {
                title: "Think like a Monk",
                img: "monk",
                description: <i>"It is not possible to control all external events but if I simply control my mind, what need is there to control external events"</i>,
            },
            {
                title: "No filter",
                img: "noFilter",
                description: <i>Focusing on doing good things and setting values should be prioritized above growth and making more money.</i>,
            },
        ],
    };
}
