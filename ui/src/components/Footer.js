import React, { Component } from "react";
import { connect } from "react-redux";
class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            images: props.images,
        };
    }

    render() {
        const { user, images } = this.state;

        return (
            <div className="footer">
                <div className="wideContainer">
                    <div className="row rowNoMargin">
                        <div
                            className="col-sm-12 col-md-6 footerRow"
                            // style={{ textAlign: "center" }}
                        >
                            <img
                                className="footerHW"
                                src={images.handwritten.contact}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 footerRow">
                            {Object.keys(user.connect).map((key) => {
                                return (
                                    <a
                                        key={key}
                                        href={user.connect[key]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="rounded img-fluid footerImage"
                                            src={images.footer[key]}
                                            alt="Image"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps)(Footer);
