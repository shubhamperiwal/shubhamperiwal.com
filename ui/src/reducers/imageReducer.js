export default function () {
    const AWS_BASE =
        "https://website-sp-images.s3-ap-southeast-1.amazonaws.com/";
    const AWS_BASE_HEADER = AWS_BASE + "header/";
    const AWS_BASE_HOME = AWS_BASE + "home/";
    const AWS_BASE_EXPERIENCE = AWS_BASE + "experience/";
    const AWS_BASE_HANDWRITTEN = AWS_BASE + "handwritten/";
    const AWS_BASE_PROJECT = AWS_BASE + "projects/";
    const AWS_BASE_FOOTER = AWS_BASE + "footer/";
    return {
        base: AWS_BASE,
        aboutPortrait: AWS_BASE + "aboutPortrait.jpeg",
        header: {
            home: AWS_BASE_HEADER + "headerHome.jpeg",
            about: AWS_BASE_HEADER + "headerAbout.jpg",
            experience: AWS_BASE_HEADER + "headerExperience.png",
            project: AWS_BASE_HEADER + "headerProject.png",
        },
        home: {
            about: AWS_BASE_HOME + "homeAbout.jpeg",
            experience: AWS_BASE_HOME + "homeExperience.jpeg",
            jumbotron: AWS_BASE_HOME + "homeJumbotron.jpeg",
            project: AWS_BASE_HOME + "homeProject.jpeg",
        },
        experience: {
            bev: AWS_BASE_EXPERIENCE + "expBEV.jpeg",
            mit: AWS_BASE_EXPERIENCE + "expMIT.png",
            smu: AWS_BASE_EXPERIENCE + "expSMU.png",
            expedia: AWS_BASE_EXPERIENCE + "expExpedia.png",
            pg: AWS_BASE_EXPERIENCE + "expP&G.jpeg",
            yojee: AWS_BASE_EXPERIENCE + "expYojee.png",
        },
        handwritten: {
            about: AWS_BASE_HANDWRITTEN + "hwAbout.png",
            interest: AWS_BASE_HANDWRITTEN + "hwInterests.png",
            career: AWS_BASE_HANDWRITTEN + "hwCareer.png",
            contact: AWS_BASE_HANDWRITTEN + "hwContact.png",
            education: AWS_BASE_HANDWRITTEN + "hwEducation.png",
            experience: AWS_BASE_HANDWRITTEN + "hwExperience.png",
            skill: AWS_BASE_HANDWRITTEN + "hwSkills.png",
            tool: AWS_BASE_HANDWRITTEN + "hwTools.png",
            project: AWS_BASE_HANDWRITTEN + "hwBook.png",
        },
        footer: {
            email: AWS_BASE_FOOTER + "drawEmail.png",
            gitHub: AWS_BASE_FOOTER + "drawGit.png",
            linkedIn: AWS_BASE_FOOTER + "drawLinkedIn.png",
            telegram: AWS_BASE_FOOTER + "drawTelegram.png",
        },
        project: {
            project1: AWS_BASE_PROJECT + "Project1.gif",
            project2: AWS_BASE_PROJECT + "Project2.gif",
            project3: AWS_BASE_PROJECT + "Project3.gif",
            project4: AWS_BASE_PROJECT + "Project4.gif",
        },
    };
}
