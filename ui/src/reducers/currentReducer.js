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
            title: "Range",
            img: "range",
            description: (
                <>
                    The most impactful inventors cross domains rather than deepening their knowledge in a single area <br/><br/>
                    As experts silo themselves further while computers master more of the skills once reserved for highly focused humans, 
                    people who think broadly and embrace diverse experiences and perspectives will increasingly thrive. <br/><br/>
                    <i>“We learn who we are in practice, not in theory."</i>
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
        ],
    };
}
