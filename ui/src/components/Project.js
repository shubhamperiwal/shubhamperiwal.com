import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { connect } from "react-redux";
class Project extends Component {
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
                    <div className="col-md-4" style={{textAlign: "center"}}>
                        <CardImg
                            className="projectBorder cardImg"
                            src={img}
                            alt={title}
                        />
                        <i>{issuer} , {issueDate}</i>
                    </div>
                    <div className="col-md-8">
                        <CardBody>
                            <CardSubtitle style={{textAlign: "left"}}>
                                <a href={link} target="_blank"> <b>{title}</b></a>
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
        console.log(images);
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
                        <h2>Projects</h2>
                        <hr />
                        {projects2d.map((project) => {
                            return (
                                <div
                                    className="row"
                                    key={project[0]["title"]}
                                    style={{ marginBottom: "30px" }}
                                >
                                    {project.map((ele) => {
                                        return (
                                            <div
                                                className="col-6 col-lg-3 col-md-4"
                                                key={ele["title"]}
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
                            );
                        })}
                    </div>
                    <div className="wideContainer">
                        <h2>Certificates</h2>
                        <hr />
                        {certificates2d.map((certificate) => {
                            return (
                                <div
                                    className="row"
                                    key={certificate[0]["title"]}
                                    style={{ marginBottom: "30px" }}
                                >
                                    {certificate.map((ele) => {
                                        return (
                                            <div
                                                className="col-6 col-lg-3 col-md-4"
                                                key={ele["title"]}
                                            >
                                                {this.renderCardCertificate(
                                                    ele["title"],
                                                    images.certificate[
                                                        ele["img"]
                                                    ],
                                                    ele["body"],
                                                    ele["issuer"],
                                                    ele["issueDate"],
                                                    ele["link"]
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
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

export default connect(mapStateToProps)(Project);
