import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "reactstrap";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

class Current extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalTitle: "",
            modalBody: "",
        };

        this.handleSelectBook = this.handleSelectBook.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
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
                            className={"projectBorder " + className}
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

    handleSelectBook(title, img, body) {
        this.setState({
            showModal: true,
            modalTitle: title,
            modalBody: body,
            modalImg: img,
        });
    }

    handleCloseModal() {
        this.setState({
            showModal: false,
            modalTitle: "",
            modalBody: "",
            modalImg: "",
        });
    }

    renderCardOverlay(title, img, body) {
        return (
            <Card className="booksCard" style={{ border: "none" }}>
                <CardImg
                    className="booksCardImg"
                    src={img}
                    style={{ maxWidth: "100%" }}
                    alt={title}
                    onClick={() => this.handleSelectBook(title, img, body)}
                />
            </Card>
        );
    }
    render() {
        const images = this.props.images;
        const current = this.props.current;
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const today = new Date().toLocaleDateString("en-IN", options)
        return (
            <>
                <div className="upcomingGoalBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.workingTowards}
                            alt="Currently Working Towards - Shubham Periwal"
                            className="handwriting"
                        />
                        <hr />
                        <div className="row" style={{ marginBottom: "30px" }}>
                            {this.renderCard(
                                current.upcomingGoal["title"],
                                images.current[current.upcomingGoal["img"]],
                                current.upcomingGoal["description"],
                                "currentImg"
                            )}
                        </div>
                    </div>
                </div>
                <div className="currentBooksBody">
                    <div className="wideContainer">
                        <div className="row">
                            <div className="col-12 col-lg-5">
                                <img
                                    src={images.handwritten.currentlyReading}
                                    alt="Currently Reading - Shubham Periwal"
                                    className="handwriting"
                                />
                                <span style={{marginLeft: "5px"}}><i>({today})</i></span>
                                <hr />
                                <div
                                    className="row"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {this.renderCard(
                                        current.currentRead["title"],
                                        images.current[
                                            current.currentRead["img"]
                                        ],
                                        current.currentRead["description"],
                                        ""
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-lg-7">
                                <img
                                    src={images.handwritten.justFinished}
                                    alt="Just Finished - Shubham Periwal"
                                    className="handwriting"
                                />
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
                                                {this.renderCardOverlay(
                                                    ele["title"],
                                                    images.current[ele["img"]],
                                                    ele["description"]
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.showModal}
                        toggle={this.handleCloseModal}
                    >
                        <ModalHeader toggle={this.handleCloseModal}>
                            {this.state.modalTitle}
                        </ModalHeader>
                        <ModalBody>
                            <img
                                src={this.state.modalImg}
                                alt={this.state.modalTitle}
                                style={{ maxHeight: "30vh" }}
                            />
                            <br /> <br />
                            {this.state.modalBody}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="secondary"
                                onClick={this.handleCloseModal}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
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
