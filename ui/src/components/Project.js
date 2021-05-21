import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
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
    renderCard(title, img) {
        return (
            <Card className="projectBorder projectCard">
                <CardImg
                    className="projectBorder cardImg"
                    src={img}
                    alt={title}
                />
            </Card>
        );
    }
    render() {
        const { images, projects } = this.state;

        const projects2d = projects.reduce(function (rows, key, index) {
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
                        <img
                            src={images.handwritten.project}
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        />
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
                                                    images.project[ele["img"]]
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
