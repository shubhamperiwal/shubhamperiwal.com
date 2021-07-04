import React, { Component } from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookReader,
    faDumbbell,
    faStar,
    faLaptop,
    faTableTennis,
    faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            images: props.images,
        };

        this.interestIcons = {
            Reading: faBookReader,
            Technology: faLaptop,
            Sports: faTableTennis,
            "Working Out": faDumbbell,
            Running: faRunning,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderStars(score) {
        return (
            <>
                {[...Array(score)].map((x, i) => (
                    <FontAwesomeIcon id="starFilled" icon={faStar} key={i} />
                ))}
                {[...Array(5 - score)].map((x, i) => (
                    <FontAwesomeIcon id="starEmpty" icon={faStar} key={i} />
                ))}
            </>
        );
    }

    renderSkills(skills) {
        const skills2d = skills.reduce(function (rows, key, index) {
            return (
                (index % 2 == 0
                    ? rows.push([key])
                    : rows[rows.length - 1].push(key)) && rows
            );
        }, []);

        return skills2d.map((skillRow) => {
            return (
                <div
                    className="row"
                    key={skillRow[0]["title"]}
                    style={{ marginTop: "10px" }}
                >
                    {skillRow.map((skill) => {
                        return (
                            <>
                                <div
                                    className="col-6 col-md-3"
                                    key={skill["title"]}
                                    style={{
                                        fontSize: "17px",
                                        textAlign: "left",
                                    }}
                                >
                                    {skill["title"]}
                                </div>
                                <div
                                    className="col-6 col-md-3"
                                    key={skill["title"] + skill["score"]}
                                    style={{ textAlign: "center" }}
                                >
                                    {this.renderStars(skill["score"])}
                                </div>
                            </>
                        );
                    })}
                </div>
            );
        });
    }

    renderInterest(name, description, icon) {
        return (
            <div key={name} className="interestContainer">
                <div className="interest">
                    <Card className="interestFront">
                        <>
                            <FontAwesomeIcon icon={icon} />
                            <h6 style={{ textAlign: "center" }}>{name}</h6>
                        </>
                    </Card>
                    <Card key={name} className="interestBack">
                        <div className="interestBackDescription">
                            {description}
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    render() {
        const { user, images } = this.state;
        return (
            <>
                <div className="aboutBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.about}
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        />
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <p className="aboutPara">
                                    {user.about.description}
                                </p>
                            </div>
                            <div className="col-12 col-md-4">
                                <img
                                    className="img-fluid"
                                    src={images.aboutPortrait}
                                    alt="Image"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutInterestBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.interest}
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        />
                        <div className="row rowNoMargin">
                            {user.about.interests.map((interest) => {
                                return this.renderInterest(
                                    interest.title,
                                    interest.description,
                                    this.interestIcons[interest.title]
                                );
                            })}
                        </div>
                    </div>
                </div>
                <hr style={{ margin: "0px" }} />
                <div id="skillsDiv" style={{ justifyContent: "center" }}>
                    <div className="wideContainer">
                        {/* <img
                            src={images.handwritten.skill}
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        /> */}
                        <h3>Languages</h3>
                        <div className="skillsTableDiv">
                            {this.renderSkills(user.about.languages)}
                        </div>
                        {/* <img
                            src={images.handwritten.tool}
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        /> */}
                        <h3>Skills | Tools</h3>
                        <div className="skillsTableDiv">
                            {this.renderSkills(user.about.skills)}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    //so now these props are directly available in the component
    return {
        user: state.user,
        images: state.images,
    };
}

export default connect(mapStateToProps)(Home);
