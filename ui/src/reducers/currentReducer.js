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
            title: "Aug, 2024",
            img: "mba",
            description: (
                <>
                    Preparing for post-graduate studies. <br/>
                </>
            ),
        },
        recentlyAchieved: {
            title: "Jan, 2022",
            img: "cfa",
            description: (
                <>
                    Cleared CFA Level II in first attempt. <br/><br/>
                </>
            ),
        },
        currentRead: {
            title: "The Daily Stoic",
            img: "stoic",
            description: (
                <>
                    <i>
                        You have power over your mind – not outside events. Realize this, and you will find strength. - Marcus Aurelius
                    </i>
                </>
            ),
        },
        latestRead: [
            {
                title: "Tarzan Economics",
                img: "tarzan",
                description: (
                    <i>
                        The 'curse of knowledge' is the misplaced assumption that the people around us share the same knowledge
                        in an area where we have developed our expertise
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
