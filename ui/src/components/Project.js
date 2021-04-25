import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    CardImgOverlay,
} from "reactstrap";
import { connect } from "react-redux";
class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: props.images,
            projects: props.projects,
        };
    }

    renderCard(title, description, img, imgText) {
        return (
            <Card className="projectCard">
                <CardImgOverlay className="cardImgOverlayItem">
                    <div
                        className="cardImgText"
                        data-id={title}
                        style={{
                            color: "white",
                            backgroundColor: "rgb(0,0,0,0.5)",
                            margin: "0px 0px 0px 0px",
                        }}
                    >
                        <span>{imgText}</span>
                    </div>
                </CardImgOverlay>
                <CardImg
                    className="cardImg"
                    width="50%"
                    src={img}
                    alt={title}
                />
                <CardBody style={{ color: "black" }}>
                    <CardSubtitle>
                        {" "}
                        <b>{title} </b>
                    </CardSubtitle>
                    {description}
                </CardBody>
            </Card>
        );
    }
    render() {
        const { images, projects } = this.state;

        const projects2d = projects.reduce(function (rows, key, index) {
            return (
                (index % 2 == 0
                    ? rows.push([key])
                    : rows[rows.length - 1].push(key)) && rows
            );
        }, []);

        return (
            <>
                <div className="wideContainer">
                    <img
                        src={images.handwritten.project}
                        style={{ maxWidth: "100%" }}
                    />
                    <hr />
                </div>
                <div className="wideContainer" style={{ marginBottom: "10px" }}>
                    {projects2d.map((project) => {
                        return (
                            <div
                                className="row"
                                key={project[0]["title"]}
                                style={{ marginBottom: "10px" }}
                            >
                                {project.map((ele) => {
                                    return (
                                        <div
                                            className="col-12 col-md-6"
                                            key={ele["title"]}
                                        >
                                            {this.renderCard(
                                                ele["title"],
                                                ele["description"],
                                                images.project[ele["img"]],
                                                ele["imageText"]
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
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
