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
                    Eight Principles for Pivoting Through Disruption <br />
                    Written by the former chief economist of Spotify
                </>
            ),
        },
        latestRead: [
            {
                title: "Strategy Beyond the hockey Stick",
                img: "hockeyStick",
                description: <>Strategy Beyond the hockey Stick</>,
            },
            {
                title: "Think like a Monk",
                img: "monk",
                description: <>Think like a monk</>,
            },
            {
                title: "No filter",
                img: "noFilter",
                description: <>No Filter</>,
            },
        ],
    };
}
