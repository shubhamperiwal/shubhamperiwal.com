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
            title: "June, 2022",
            img: "gmat",
            description: (
                <>
                    My target score is 760/800. I aim to give the exam in early June 2022<br/>
                </>
            ),
        },
        recentlyAchieved: {
            title: "Jan, 2022",
            img: "cfa",
            description: (
                <>
                    Most recently, I cleared the CFA Level 1 exam with more than <a target="_blank" href="https://www.dropbox.com/s/2kedigv9vfmxxlx/CFA%20results.pdf?dl=0"> 90th percentile. </a> <br/>
                </>
            ),
        },
        currentRead: {
            title: "Super Pumped",
            img: "superPumped",
            description: (
                <>
                    <i>“The law isn’t what is written. It’s what is enforced.”</i><br/><br/>
                    Definitely worth a read as the book covers everything from Kalanick's unbelievable hustle to the "bro" culture in Silicon Valley
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
                title: "Range",
                img: "range",
                description: (
                    <>
                    <i>“We learn who we are in practice, not in theory."</i><br/><br/>
                </>
                ),
            },
        ],
    };
}
