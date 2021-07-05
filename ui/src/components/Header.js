import React, { Component } from "react";
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faBriefcase,
    faClipboardList
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            images: props.images,
        };

        this.headerIcons = {
            home: faHome,
            about: faUser,
            experience: faBriefcase,
            project: faClipboardList
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

    renderNav(className, link, icon, title) {
        return (
            <NavItem className="headerNavItem" key={link} style={{borderRight: "none"}}>
                <NavLink
                    className="nav-link nav-top"
                    to={"/" + link}
                    onClick={() => this.handleLinkClick(link)}
                >
                    <div className="row">
                        <div className="col col-sm-offset-4 col-sm-4 col-md-12">
                            {/* <img className="headerImg" src={img} alt="Image" /> */}
                            <FontAwesomeIcon icon={icon} size={"3x"}/>
                        </div>
                        <div className="col col-sm-6 col-md-12">
                            <h5
                                className={
                                    className +
                                    " headerTitle headerTitle" +
                                    link
                                }
                            >
                                {title}
                            </h5>
                        </div>
                    </div>
                </NavLink>
            </NavItem>
        );
    }

    render() {
        const { images } = this.state;
        const activeLink = this.props.activeLink;
        const pages = ["home", "experience", "project"];
        const titles = ["Home", "Experience", "Projects"];
        return (
            <>
                <Navbar
                    light
                    className="navbarClass"
                    expand="md"
                    style={{ width: "100%", whiteSpace: "nowrap", zIndex: "999" }}
                    sticky={"top"}
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
                            <Nav navbar style={{ width: "100%"}}>
                                {pages.map((page, index) => {
                                    return this.renderNav(
                                        activeLink === page
                                            ? "active_item"
                                            : "",
                                        page,
                                        this.headerIcons[page],
                                        titles[index]
                                    );
                                })}
                            </Nav>
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

export default connect(mapStateToProps)(Header);
