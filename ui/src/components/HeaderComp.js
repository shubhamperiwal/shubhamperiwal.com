import React, { Component } from "react";
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class HeaderComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            images: props.images,
        };

        // When you need to use this function in JSX, need to bind it like this
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    handleLinkClick(link) {
        this.setState({
            isNavOpen: false,
        });

        this.props.onChangeLink(link);
    }

    renderNav(className, link, img) {
        return (
            <div className="col-md-2" key={link}>
                <NavItem>
                    <NavLink
                        className="nav-link nav-top"
                        to={"/" + link}
                        onClick={() => this.handleLinkClick(link)}
                    >
                        <img
                            className={className + " headerImg" +(link==="about"? " headerAbout" : "")}
                            src={img}
                            alt="Image"
                        />
                    </NavLink>
                </NavItem>
            </div>
        );
    }

    render() {
        const { images } = this.state;
        const activeLink = this.props.activeLink;
        const pages = ["home", "about", "experience", "project"];
        return (
            <>
                <Navbar
                    light
                    className="navbarClass"
                    expand="md"
                    style={{ width: "100%", whiteSpace: "nowrap" }}
                >
                    {/* Or can use arrow function in onClick */}
                    <NavbarToggler
                        className="float-xs-right"
                        style={{
                            borderColor: "1px solid black",
                            color: "black",
                        }}
                        onClick={this.toggleNav}
                    />
                    {/* if false then hidden else shown */}
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <div className="row" style={{ width: "100%" }}>
                            <Nav navbar style={{ width: "100%" }}>
                                <div className="col-1" />
                                {pages.map((page) => {
                                    return this.renderNav(
                                        activeLink === page
                                            ? "active_item"
                                            : "",
                                        page,
                                        images.header[page]
                                    );
                                })}
                            </Nav>
                        </div>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    //so now these props are directly available in the component
    return {
        images: state.images,
    };
}

export default connect(mapStateToProps)(HeaderComp);
