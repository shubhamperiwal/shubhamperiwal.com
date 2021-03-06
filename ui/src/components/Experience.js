import React, { Component } from "react";
import { Badge } from "reactstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            experiences: props.experiences,
            images: props.images,
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
                    <FontAwesomeIcon id="starEmpty" icon={faStar} />
                ))}
            </>
        );
    }

    renderSkills(skills) {
        return (
            <div className="row" style={{ marginTop: "10px" }}>
                {skills.map((skill) => {
                    return (
                        <>
                            <div
                                className="col-6 col-md-3"
                                key={skill["title"]}
                                style={{
                                    textAlign: "left",
                                    marginTop: "5px",
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
    }

    renderIcon(img, title) {
        return (
            <img
                className="img-fluid"
                src={img}
                alt={title}
                style={{ height: "100%", width: "100%" }}
                key={img}
            />
        );
    }

    renderTimelineElement(
        isWork,
        date,
        img,
        title,
        subtitle,
        description,
        color,
        badges,
        badgeColor,
        fontColor
    ) {
        return (
            <VerticalTimelineElement
                className={
                    "vertical-timeline-element" + isWork
                        ? "--work"
                        : "--education"
                }
                contentStyle={{
                    background: color,
                    color: fontColor,
                    border: "none",
                    marginBottom: "0px",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid " + color,
                }}
                icon={this.renderIcon(img, title)}
                key={title + subtitle}
            >
                <div>
                    {badges.map((badge, j) => (
                        <Badge
                            key={j}
                            color={badgeColor}
                            style={{
                                marginLeft: j > 0 ? "1%" : "0%",
                                fontSize: "13px",
                            }}
                        >
                            {badge}
                        </Badge>
                    ))}
                </div>
                <h4
                    className="vertical-timeline-element-title"
                    style={{ color: fontColor }}
                >
                    <b>{title}</b>
                </h4>
                <div className="vertical-timeline-element-subtitle">
                    <div className="row rowNoMargin">
                        <div
                            className="col-12 col-md-6"
                            style={{ padding: "0px" }}
                        >
                            <b>{subtitle}</b>
                        </div>
                        <div
                            className="col-12 col-md-6"
                            style={{ padding: "0px" }}
                        >
                            <span
                                className="vertical-timeline-element-date"
                                style={{ float: "right", padding: "0px" }}
                            >
                                {date}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="vertical-timeline-element-description">
                    {description}
                </div>
            </VerticalTimelineElement>
        );
    }

    render() {
        const { user, experiences, images } = this.state;
        return (
            <>
                <div className="experienceBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.experience}
                            alt={"Experience - Shubham Periwal"}
                            className="handwriting"
                        />
                        <hr />
                        <VerticalTimeline
                            className="workTimeline"
                            layout="1-column-left"
                        >
                            {experiences.work.map((exp, index) => {
                                return this.renderTimelineElement(
                                    true,
                                    exp["date"],
                                    images.experience[exp["img"]],
                                    exp["title"],
                                    exp["subtitle"],
                                    exp["description"],
                                    index % 2 === 0 ? "#f9b28f" : "#92926D",
                                    exp["tags"],
                                    index % 2 === 0 ? "light" : "light",
                                    index % 2 === 0 ? "black" : " white"
                                );
                            })}
                        </VerticalTimeline>
                    </div>
                </div>
                <div className="educationBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.education}
                            alt="Education - Shubham Periwal"
                            className="handwriting"
                        />
                        <hr />
                        <VerticalTimeline
                            className="educationTimeline"
                            layout="1-column-left"
                        >
                            {experiences.education.map((exp, index) => {
                                return this.renderTimelineElement(
                                    false,
                                    exp["date"],
                                    images.experience[exp["img"]],
                                    exp["title"],
                                    exp["subtitle"],
                                    exp["description"],
                                    index % 2 === 0 ? "#DBC224" : "#2B2C7C",
                                    exp["tags"],
                                    index % 2 === 0 ? "light" : "light",
                                    index % 2 === 0 ? "black" : "white"
                                );
                            })}
                        </VerticalTimeline>
                    </div>
                </div>
                <div id="skillsDiv" style={{ justifyContent: "center" }}>
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.languages}
                            alt="Languages - Shubham Periwal"
                            className="handwriting"
                            style={{paddingTop: "10px"}}
                        />
                        <div className="skillsTableDiv">
                            {this.renderSkills(user.about.languages)}
                        </div>
                        <img
                            src={images.handwritten.skills}
                            alt="Skills - Shubham Periwal"
                            className="handwriting"
                            style={{paddingTop: "10px"}}
                        />
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
        experiences: state.experiences,
        images: state.images,
    };
}

export default connect(mapStateToProps)(Experience);
