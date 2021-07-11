import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { connect } from "react-redux";
class Achievement extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    renderCard(title, img, body) {
        return (
            <Card className="projectBorder projectCard">
                <CardImg
                    className="projectBorder cardImg"
                    src={img}
                    alt={title}
                />
                <CardBody>
                    <CardSubtitle>
                        <b>{title}</b>
                    </CardSubtitle>
                    {body}
                </CardBody>
            </Card>
        );
    }
    renderCardCertificate(title, img, body, issuer, issueDate, link) {
        return (
            <Card className="projectBorder projectCard">
                <div className="row no-gutters">
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <CardImg
                            className="projectBorder cardImg"
                            src={img}
                            alt={title}
                        />
                        <i>
                            {issuer} , {issueDate}
                        </i>
                    </div>
                    <div className="col-8">
                        <CardBody>
                            <CardSubtitle style={{ textAlign: "left" }}>
                                <a href={link} target="_blank">
                                    {" "}
                                    <b>{title}</b>
                                </a>
                            </CardSubtitle>
                            {body}
                        </CardBody>
                    </div>
                </div>
            </Card>
        );
    }
    render() {
        const images = this.props.images;
        const projects = this.props.achievements.projects;
        const certificates = this.props.achievements.certificates;

        return (
            <>
                <div className="projectBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.achievements}
                            alt="Achievements - Shubham Periwal"
                            className="handwriting"
                        />
                        <hr />
                        <div className="row" style={{ marginBottom: "30px" }}>
                            {projects.map((ele) => {
                                return (
                                    <div
                                        className="col-12 col-md-4"
                                        key={ele["title"]}
                                        style={{ marginTop: "10px" }}
                                    >
                                        {this.renderCard(
                                            ele["title"],
                                            images.project[ele["img"]],
                                            ele["body"]
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="certificateBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.certificates}
                            alt="Certificates - Shubham Periwal"
                            className="handwriting"
                        />
                        <hr />
                        <div className="row" style={{ marginBottom: "30px" }}>
                            {certificates.map((ele) => {
                                return (
                                    <div
                                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                                        key={ele["title"]}
                                        style={{ marginTop: "10px" }}
                                    >
                                        {this.renderCardCertificate(
                                            ele["title"],
                                            images.certificate[ele["img"]],
                                            ele["body"],
                                            ele["issuer"],
                                            ele["issueDate"],
                                            ele["link"]
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: state.images,
        achievements: state.achievements,
    };
}

export default connect(mapStateToProps)(Achievement);
