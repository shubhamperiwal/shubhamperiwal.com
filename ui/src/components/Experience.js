import React, { Component } from "react";
import { Badge } from "reactstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            experiences: props.experiences,
            images: props.images,
        };
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
                <div className="row" key={skillRow[0]["title"]} style={{marginTop: "10px"}}>
                    {skillRow.map((skill) => {
                        return (
                            <>
                                <div
                                    className="col-6 col-md-3"
                                    key={skill["title"]}
                                    style={{
                                        fontSize: "17px",
                                        textAlign: "left",
                                        width: "30%",
                                    }}
                                >
                                    {skill["title"]}
                                </div>
                                <div
                                    className="col-6 col-md-3"
                                    key={skill["title"] + skill["score"]}
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

    renderIcon(img) {
        return (
            <img
                className="img-fluid"
                src={img}
                alt="Image"
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
        badgeColor
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
                }}
                contentArrowStyle={{
                    borderRight: "7px solid " + color,
                }}
                icon={this.renderIcon(img)}
                key={title}
            >
                <div>
                    {badges.map((badge, j) => (
                        <Badge
                            key={j}
                            color={badgeColor}
                            style={{ marginLeft: "1%", fontSize: "13px" }}
                        >
                            {badge}
                        </Badge>
                    ))}
                </div>
                <h4 className="vertical-timeline-element-title">{title}</h4>
                <h5 className="vertical-timeline-element-subtitle">
                    <>
                        <span style={{ float: "left" }}>{subtitle}</span>
                        <span style={{ float: "right" }}>{date}</span>
                        <br />
                    </>
                </h5>
                <div>{description}</div>
            </VerticalTimelineElement>
        );
    }

    render() {
        const { user, experiences, images } = this.state;
        return (
            <>
                <div className="wideContainer">
                    <div className="row">
                        <img
                            src={images.handwritten.career}
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
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
                                index % 2 === 0 ? "#C5E7FC" : "white",
                                exp["tags"],
                                index % 2 === 0 ? "light" : "info"
                            );
                        })}
                    </VerticalTimeline>
                    <img
                        src={images.handwritten.education}
                        style={{ maxWidth: "100%" }}
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
                                index % 2 === 0 ? "#FBB8DC" : "white",
                                exp["tags"],
                                index % 2 === 0 ? "light" : "info"
                            );
                        })}
                    </VerticalTimeline>
                </div>
                <hr style={{ margin: "0 0 0 0" }} />
                <div id="skillsDiv" style={{ justifyContent: "center" }}>
                    <div className="skillsTableDiv">
                        <h2 id="skillsHeader">SKILLS</h2>
                        {this.renderSkills(experiences.skills)}
                    </div>
                    <div className="skillsTableDiv">
                        <h2 id="skillsHeader">TOOLS</h2>

                        {this.renderSkills(experiences.tools)}
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
