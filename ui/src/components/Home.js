import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            images: props.images,
        };
    }

    renderImage(img) {
        return (
            <div
                className="col-sm-6 col-md-5"
                style={{ margin: "10px 10px 10px 10px" }}
            >
                <img
                    className="rounded img-fluid"
                    src={img}
                    alt="Image"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
            </div>
        );
    }

    renderTextBox(hwImg, description, link) {
        return (
            <div
                className="col-sm-8 col-md-6 homeTextBox"
            >
                <div className="container">
                    <img src={hwImg} style={{ maxWidth: "80%" }} />
                    <p
                        style={{
                            marginTop: "5%",
                            fontSize: "20px",
                        }}
                    >
                        {description}
                    </p>
                    <p>
                        <NavLink
                            to={"/" + link}
                            onClick={() => this.props.onChangeLink({ link })}
                        >
                            <button
                                type="button"
                                className="homeTextBtn btn"
                            >
                                READ MORE
                            </button>
                        </NavLink>
                    </p>
                </div>
            </div>
        );
    }
    render() {
        const { user, images } = this.state;
        const pages = ["about", "experience", "project"];
        return (
            <>
                <Jumbotron
                    style={{
                        backgroundImage: `url(${images.home.jumbotron})`,
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        height: "90vh",
                        width: "100vw",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                <div className="wideContainer">
                    {/* About Row */}
                    {pages.map((ele, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div
                                    className="row"
                                    style={{ marginTop: "5%" }}
                                    key={index}
                                >
                                    {this.renderImage(images.home[ele])}
                                    {this.renderTextBox(
                                        images.handwritten[ele],
                                        user.home[ele],
                                        ele
                                    )}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className="row"
                                    style={{ marginTop: "5%" }}
                                    key={index}
                                >
                                    {this.renderTextBox(
                                        images.handwritten[ele],
                                        user.home[ele],
                                        ele
                                    )}
                                    {this.renderImage(images.home[ele])}
                                </div>
                            );
                        }
                    })}
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
