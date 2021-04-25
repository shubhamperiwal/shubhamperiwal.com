export default function () {
    const AWS_BASE =
        "https://website-mg-images.s3-ap-southeast-1.amazonaws.com/";
    const AWS_BASE_HEADER = AWS_BASE + "header/";
    const AWS_BASE_HOME = AWS_BASE + "home/";
    const AWS_BASE_EXPERIENCE = AWS_BASE + "experience/";
    const AWS_BASE_HANDWRITTEN = AWS_BASE + "handwritten/";
    const AWS_BASE_PROJECT = AWS_BASE + "project/";
    const AWS_BASE_FOOTER = AWS_BASE + "footer/";
    return {
        base: AWS_BASE,
        aboutPortrait: AWS_BASE + "aboutPortrait.jpeg",
        header: {
            home: AWS_BASE_HEADER + "drawHome.png",
            about: AWS_BASE_HEADER + "drawAbout.png",
            experience: AWS_BASE_HEADER + "drawExperience.png",
            project: AWS_BASE_HEADER + "drawProject.png",
        },
        home: {
            about: AWS_BASE_HOME + "homeAbout.jpeg",
            experience: AWS_BASE_HOME + "homeExperience.jpeg",
            jumbotron: AWS_BASE_HOME + "homeJumbotron.jpeg",
            project: AWS_BASE_HOME + "homeProject.jpeg",
        },
        experience: {
            bev: AWS_BASE_EXPERIENCE + "expBEV.jpeg",
            mit: AWS_BASE_EXPERIENCE + "expMIT.jpeg",
            smu: AWS_BASE_EXPERIENCE + "expSMU.jpeg",
            expedia: AWS_BASE_EXPERIENCE + "expExpedia.jpeg",
            pg: AWS_BASE_EXPERIENCE + "expP&G.jpeg",
            yojee: AWS_BASE_EXPERIENCE + "expYojee.jpeg",
        },
        handwritten: {
            about: AWS_BASE_HANDWRITTEN + "hwAbout.png",
            career: AWS_BASE_HANDWRITTEN + "hwCareer.png",
            contact: AWS_BASE_HANDWRITTEN + "hwContact.png",
            education: AWS_BASE_HANDWRITTEN + "hwEducation.png",
            experience: AWS_BASE_HANDWRITTEN + "hwExperience.png",
            project: AWS_BASE_HANDWRITTEN + "hwProject.png",
        },
        footer: {
            email: AWS_BASE_FOOTER + "drawEmail.png",
            gitHub: AWS_BASE_FOOTER + "drawGit.png",
            insta: AWS_BASE_FOOTER + "drawInsta.png",
            linkedIn: AWS_BASE_FOOTER + "drawLinkedIn.png",
            telegram: AWS_BASE_FOOTER + "drawTelegram.png",
        },
        project: {
            airbnb: AWS_BASE_PROJECT + "projAirbnb.jpeg",
            cogni: AWS_BASE_PROJECT + "projCogni.jpeg",
            google: AWS_BASE_PROJECT + "projGoogle.jpeg",
            hacko: AWS_BASE_PROJECT + "projHackO.jpeg",
        },
    };
}
