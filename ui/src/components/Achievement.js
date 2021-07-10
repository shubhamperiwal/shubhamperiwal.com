import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { connect } from "react-redux";
class Achievement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: props.images,
            projects: props.projects,
        };
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
        const { images } = this.state;
        const projects = this.state.projects.projects;
        const certificates = this.state.projects.certificates;
        const projects2d = projects.reduce(function (rows, key, index) {
            return (
                (index % 4 == 0
                    ? rows.push([key])
                    : rows[rows.length - 1].push(key)) && rows
            );
        }, []);

        const certificates2d = certificates.reduce(function (rows, key, index) {
            return (
                (index % 4 == 0
                    ? rows.push([key])
                    : rows[rows.length - 1].push(key)) && rows
            );
        }, []);

        return (
            <>
                <div className="projectBody">
                    <div className="wideContainer">
                        {/* <img
                            src={images.handwritten.project}
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        /> */}
                        <h2>Achievements</h2>
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
                        <h2>Certificates</h2>
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
    //so now these props are directly available in the component
    return {
        images: state.images,
        projects: state.projects,
    };
}

export default connect(mapStateToProps)(Achievement);
