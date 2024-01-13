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
            title: "", // If you want to add dates to the achievements, they go here
            img: "mba",
            description: (
                <>
                    Preparing for post-graduate studies. <br/>
                </>
            ),
        },
        recentlyAchieved: {
            title: "", // If you want to add dates to the achievements, they go here
            img: "cfa",
            description: (
                <>
                    Cleared CFA Level II in first attempt. <br/><br/>
                </>
            ),
        },
        currentRead: {
            title: "The Manager's Handbook",
            img: "managerHandbook",
            description: (
                <>
                    <ul>Five <b>critical</b> skills shared by successful leaders: <br/><br/>
                    <li>Commitment to building a team</li>
                    <li>Fanatical custodian of time</li>
                    <li>Willingness to seek and take advice</li>
                    <li>Adherance to priorities</li>
                    <li>Obsession with quality</li>
                    </ul>
                </>
            ),
        },
        latestRead: [
            {
                title: "The Daily Stoic",
                img: "stoic",
                description: (
                    <i>
                        You have power over your mind – not outside events. Realize this, and you will find strength. - Marcus Aurelius
                    </i>
                ),
            },
            {
                title: "That will never work",
                img: "netflix",
                description: (
                    <i>
                        You're going to get things wrong. You just don't want to get the same things wrong twice.
                    </i>
                ),
            },
            {
                title: "Super Pumpled",
                img: "superPumped",
                description: (
                    <>
                    <i>“The law isn’t what is written. It’s what is enforced.”</i>
                </>
                ),
            },
        ],
    };
}
