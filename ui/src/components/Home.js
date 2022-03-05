import React, { Component } from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookReader,
    faDumbbell,
    faLaptop,
    faTableTennis,
    faRunning,
    faPlaneDeparture,
    faMountain,
    faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            images: props.images,
        };

        this.interestIcons = {
            Reading: faBookReader,
            Technology: faLaptop,
            Sports: faTableTennis,
            "Working Out": faDumbbell,
            Running: faRunning,
            Travelling: faPlaneDeparture,
            Hiking: faMountain,
            Blockchain: faDiceD6
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderInterest(name, description, icon) {
        return (
            <div key={name} className="interestContainer">
                <div className="interest">
                    <Card className="interestFront">
                        <>
                            <FontAwesomeIcon icon={icon} />
                            <h6 style={{ textAlign: "center" }}>{name}</h6>
                        </>
                    </Card>
                    <Card key={name} className="interestBack">
                        <div className="interestBackDescription">
                            {description}
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    render() {
        const { user, images } = this.state;
        return (
            <>
                <div className="homeJumbotron" style={{ width: "100%" }} />
                <div className="aboutBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.about}
                            alt="About me - Shubham Periwal"
                            className="handwriting"
                        />
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <p className="aboutPara">
                                    {user.about.description}
                                </p>
                            </div>
                            <div className="col-12 col-md-4">
                                <img
                                    className="img-fluid"
                                    src={images.aboutPortrait}
                                    alt="Portrait image - Shubham Periwal"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutInterestBody">
                    <div className="wideContainer">
                        <img
                            src={images.handwritten.interest}
                            alt = "Interests - Shubham Periwal"
                            className="handwriting"
                        />
                        <div className="row rowNoMargin">
                            {user.about.interests.map((interest) => {
                                return this.renderInterest(
                                    interest.title,
                                    interest.description,
                                    this.interestIcons[interest.title]
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
        user: state.user,
        images: state.images,
    };
}

export default connect(mapStateToProps)(Home);
