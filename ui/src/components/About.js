import React, { Component } from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookReader,
    faDumbbell,
    faSwimmer,
    faPenFancy,
    faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            images: props.images,
        };

        this.interestIcons = {
            Reading: faBookReader,
            Writing: faPenFancy,
            Yoga: faDumbbell,
            Swimming: faSwimmer,
            Painting: faPalette,
        };
    }

    renderInterest(name, description, icon) {
        return (
            <div key={name} className="interestContainer">
                <div className="interest">
                    <Card className="interestFront">
                        <div>
                            <FontAwesomeIcon icon={icon} size="2x" />
                            <h4>{name}</h4>
                        </div>
                    </Card>
                    <Card key={name} className="interestBack">
                        <div>
                            <div className="interestBackDescription">
                                {description}
                            </div>
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
                <div className="mediumWideContainer">
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-12 col-md-4">
                            <img
                                className="img-fluid"
                                src={images.aboutPortrait}
                                alt="Image"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                            />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="container">
                                <img
                                    src={images.handwritten.about}
                                    style={{ maxWidth: "100%" }}
                                />
                                <p className="aboutPara">
                                    {user.about.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <h1>Interests</h1>
                    </div>
                    <div className="row">
                        {user.about.interests.map((interest) => {
                            return this.renderInterest(
                                interest.title,
                                interest.description,
                                this.interestIcons[interest.title]
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
        user: state.user,
        images: state.images,
    };
}

export default connect(mapStateToProps)(About);
