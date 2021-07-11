export default function () {
    const AWS_BASE =
        "https://website-sp-images.s3-ap-southeast-1.amazonaws.com/";
    const AWS_BASE_HOME = AWS_BASE + "home/";
    const AWS_BASE_EXPERIENCE = AWS_BASE + "experience/";
    const AWS_BASE_HANDWRITTEN = AWS_BASE + "handwritten/";
    const AWS_BASE_PROJECT = AWS_BASE + "project/";
    const AWS_BASE_CERTIFICATE = AWS_BASE + "certificate/";
    const AWS_BASE_CURRENT = AWS_BASE + "current/";
    const AWS_BASE_FOOTER = AWS_BASE + "footer/";
    return {
        base: AWS_BASE,
        aboutPortrait: AWS_BASE + "aboutPortrait.jpg",
        home: {
            about: AWS_BASE_HOME + "homeAbout.jpeg",
            experience: AWS_BASE_HOME + "homeExperience.jpeg",
            // jumbotron: AWS_BASE_HOME + "homeJumbotron.jpg",
            project: AWS_BASE_HOME + "homeProject.jpeg",
        },
        experience: {
            gic: AWS_BASE_EXPERIENCE + "gic.jpeg",
            shopee: AWS_BASE_EXPERIENCE + "shopee.png",
            smu: AWS_BASE_EXPERIENCE + "smu.png",
            cmu: AWS_BASE_EXPERIENCE + "cmu.jpeg",
            cudy: AWS_BASE_EXPERIENCE + "cudy.png",
            hwa: AWS_BASE_EXPERIENCE + "hwa.jpeg",
        },
        handwritten: {
            about: AWS_BASE_HANDWRITTEN + "hwAbout.png",
            interest: AWS_BASE_HANDWRITTEN + "hwInterests.png",
            career: AWS_BASE_HANDWRITTEN + "hwCareer.png",
            contact: AWS_BASE_HANDWRITTEN + "hwContact.png",
            education: AWS_BASE_HANDWRITTEN + "hwEducation.png",
            experience: AWS_BASE_HANDWRITTEN + "hwExperience.png",
            skills: AWS_BASE_HANDWRITTEN + "hwSkills.png",
            languages: AWS_BASE_HANDWRITTEN + "hwLanguages.png",
            tool: AWS_BASE_HANDWRITTEN + "hwTools.png",
            project: AWS_BASE_HANDWRITTEN + "hwBook.png",
            achievements: AWS_BASE_HANDWRITTEN + "hwAchievements.png",
            certificates: AWS_BASE_HANDWRITTEN + "hwCertificates.png",
            workingTowards: AWS_BASE_HANDWRITTEN + "hwWorkingTowards.png",
            currentlyReading: AWS_BASE_HANDWRITTEN + "hwCurrentlyReading.png",
            justFinished: AWS_BASE_HANDWRITTEN + "hwJustFinished.png",
        },
        footer: {
            email: AWS_BASE_FOOTER + "drawEmail.png",
            gitHub: AWS_BASE_FOOTER + "drawGit.png",
            linkedIn: AWS_BASE_FOOTER + "drawLinkedIn.png",
            telegram: AWS_BASE_FOOTER + "drawTelegram.png",
        },
        project: {
            bigBytes: AWS_BASE_PROJECT + "bigBytes.jpg",
            covestro: AWS_BASE_PROJECT + "covestro.jpeg",
            fyp: AWS_BASE_PROJECT + "fyp.jpg",
            geospatial: AWS_BASE_PROJECT + "geospatial.jpg",
            devanagari: AWS_BASE_PROJECT + "devanagari.gif",
            emojinator: AWS_BASE_PROJECT + "emojinator.gif",
        },
        certificate: {
            awsCloud: AWS_BASE_CERTIFICATE + "awsCloud.jpeg",
            dsNano:AWS_BASE_CERTIFICATE + "dsNano.jpeg",
            flutter:AWS_BASE_CERTIFICATE + "flutter.jpeg",
            mlPython:AWS_BASE_CERTIFICATE + "mlPython.png",
            kdb:AWS_BASE_CERTIFICATE + "kdb.jpeg",
            mensa:AWS_BASE_CERTIFICATE + "mensa.png"
        },
        current: {
            cfa:AWS_BASE_CURRENT + "cfa.png",
            tarzan: AWS_BASE_CURRENT+"tarzan.jpeg",
            hockeyStick: AWS_BASE_CURRENT+"hockeyStick.jpeg",
            monk: AWS_BASE_CURRENT+"monk.jpeg",
            noFilter: AWS_BASE_CURRENT+"noFilter.jpeg"
        }
    };
}