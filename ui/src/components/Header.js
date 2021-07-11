import React, { Component } from "react";
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faTrophy,
    faHistory,
    faCalendarDay
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            scrollClass: ""
        };

        this.headerIcons = {
            home: faHome,
            about: faUser,
            experience: faHistory,
            achievement: faTrophy,
            current: faCalendarDay
        };

        // When you need to use this function in JSX, need to bind it like this
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
      }
      
      handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.scrollClass){
              this.setState({ scrollClass: "navbarScollClass" });   
            }
        }else{
            if(this.state.scrollClass){
              this.setState({ scrollClass: "" });
            }
        }
       
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

    renderNav(className, link, icon, title, iconClassName) {
        return (
            <NavItem className="headerNavItem" key={link} style={{borderRight: "none"}}>
                <NavLink
                    className="nav-link nav-top"
                    to={"/" + link}
                    onClick={() => this.handleLinkClick(link)}
                >
                    <div className="row">
                        <div className="col col-sm-offset-4 col-sm-4 col-md-12 headerCol">
                            <FontAwesomeIcon icon={icon} size={"3x"} className={iconClassName}/>
                        </div>
                        <div className="col col-sm-6 col-md-12 headerCol">
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
        const activeLink = this.props.activeLink;
        const pages = ["home", "experience", "achievement", "current"];
        const titles = ["Home", "Experiences", "Achievements", "Current Affairs"];
        return (
            <>
                <Navbar
                    dark
                    className={"navbarClass "+this.state.scrollClass}
                    expand="md"
                    style={{ width: "100%", whiteSpace: "nowrap", zIndex: "999" }}
                    sticky={"top"}
                >
                    <NavbarToggler
                        className="float-xs-right"
                        style={{
                            borderColor: "1px solid black",
                            color: "black",
                        }}
                        onClick={this.toggleNav}
                    />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar style={{ width: "100%"}}>
                                {pages.map((page, index) => {
                                    return this.renderNav(
                                        activeLink === page
                                            ? "active_item"
                                            : "",
                                        page,
                                        this.headerIcons[page],
                                        titles[index],
                                        activeLink === page
                                            ? "headerIcon headerIconActive"
                                            : "headerIcon"
                                    );
                                })}
                            </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;
