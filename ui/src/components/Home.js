import React, { Component } from "react";
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

    renderImage(img, index) {
        return (
            <div className={"col-sm-6 col-md-5 homeText homeImage homeImage"+index}>
                <img
                    className="rounded img-fluid"
                    src={img}
                    alt="Image"
                    style={{ maxHeight: "100%", float: "right" }}
                />
            </div>
        );
    }

    renderTextBox(hwImg, description, link) {
        return (
            <div className="col-sm-8 col-md-5 homeText homeTextBox">
                <div className="container">
                    <NavLink
                        to={"/" + link}
                        onClick={() => this.props.onChangeLink(link)}
                    >
                        <img
                            className="homeTextImage"
                            src={hwImg}
                            style={{
                                maxHeight: "75px",
                                marginTop: "5%",
                                boxShadow: "inherit",
                            }}
                        />
                    </NavLink>
                    <p
                        style={{
                            marginTop: "5%",
                            fontSize: "20px",
                            textDecoration: "none",
                        }}
                    >
                        {description}
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
                <hr className="headerLine" />
                <img src={images.home.jumbotron} style={{ width: "100%" }} />

                <div>
                    {pages.map((ele, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div
                                    className={"homeTextArea homeTextArea" + index}
                                    key={index}
                                >
                                    <div className="wideContainer">
                                        <div
                                            className={"row"}
                                        >
                                            {this.renderImage(images.home[ele], index)}
                                            <div className="col-md-2 col-sm-0"/>
                                            {this.renderTextBox(
                                                images.handwritten[ele],
                                                user.home[ele],
                                                ele
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className={"homeTextArea homeTextArea" + index}
                                    style={{ width: "100%"}}
                                    key={index}
                                >
                                    <div className="wideContainer">
                                        <div
                                            className="row"
                                        >
                                            {this.renderTextBox(
                                                images.handwritten[ele],
                                                user.home[ele],
                                                ele
                                            )}
                                            <div className="col-md-2 col-sm-0"/>
                                            {this.renderImage(images.home[ele], index)}
                                        </div>
                                    </div>
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
