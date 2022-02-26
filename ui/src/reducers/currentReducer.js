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
            title: "GMAT (June 2022)",
            img: "gmat",
            description: (
                <>
                    My target score would be 760/800 for GMAT so that I can get into the best colleges in the States or the esteemed 
                    Indian Institute of Management (IIMs) in India. <br/>
                    Subsequently, I am yet to decide whether I would do a Masters in Business Administration or something more specialised like Masters 
                    in Financial Engineering. <br/> <br/>
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
