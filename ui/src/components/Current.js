import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { connect } from "react-redux";
class Current extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderCard(title, img, body, className) {
        return (
            <Card className="projectBorder projectCard">
                <div className="row no-gutters">
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <CardImg
                            className={"projectBorder "+className}
                            src={img}
                            alt={title}
                        />
                    </div>
                    <div className="col-8">
                        <CardBody>
                            <CardSubtitle style={{ textAlign: "left" }}>
                                <b>{title}</b>
                            </CardSubtitle>
                            {body}
                        </CardBody>
                    </div>
                </div>
            </Card>
        );
    }
    render() {
        const images = this.props.images["current"];
        const current = this.props.current;
        return (
            <>
                <div className="upcomingGoalBody">
                    <div className="wideContainer">
                        {/* <img
                            src={images.handwritten.project}
                            alt="Project - Shubham Periwal"
                            style={{ maxWidth: "100%", maxHeight: "75px" }}
                        /> */}
                        <h2>Currently Working Towards...</h2>
                        <hr />
                        <div className="row" style={{ marginBottom: "30px" }}>
                            {this.renderCard(
                                current.upcomingGoal["title"],
                                images[current.upcomingGoal["img"]],
                                current.upcomingGoal["description"],
                                "cardImg"
                            )}
                        </div>
                    </div>
                </div>
                <div className="currentBooksBody">
                    <div className="wideContainer">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h2>Currently Reading</h2>
                                <hr />
                                <div
                                    className="row"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {this.renderCard(
                                        current.currentRead["title"],
                                        images[current.currentRead["img"]],
                                        current.currentRead["description"],
                                        ""
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <h2>Latest 3 Books Read</h2>
                                <hr />
                                <div
                                    className="row"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {current.latestRead.map((ele) => {
                                        return (
                                            <div
                                                className="col-4"
                                                key={ele["title"]}
                                                style={{ marginTop: "10px" }}
                                            >
                                                <img src={images[ele["img"]]} style={{maxWidth: "100%"}}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
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
        current: state.current,
    };
}

export default connect(mapStateToProps)(Current);
