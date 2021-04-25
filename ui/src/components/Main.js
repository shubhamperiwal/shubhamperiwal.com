import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderComp from "./HeaderComp";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasLoaded: false,
            activeLink: "home",
        };

        this.handleChangeLink = this.handleChangeLink.bind(this);
    }

    handleChangeLink(val) {
        this.setState({
            activeLink: val,
        });
    }

    getActiveLink(path) {
        var link = "home";
        if (path === "/home" || path === "/") {
            link = "home";
        } else if (path === "/experience") {
            link = "experience";
        } else if (path === "/about") {
            link = "about";
        } else if (path === "/project") {
            link = "project";
        }

        this.handleChangeLink(link);
    }

    componentDidMount() {
        const location = window.location;
        if (location !== undefined) {
            var path = location.hash;
            path = path.replace("#", "");
            this.getActiveLink(path);
        }
    }

    render() {
        return (
            <>
                <div className="body">
                    <HeaderComp
                        activeLink={this.state.activeLink}
                        onChangeLink={this.handleChangeLink}
                    />
                    <Switch>
                        {/* path ending with home */}
                        <Route
                            path="/"
                            exact
                            component={() => (
                                <Home onChangeLink={this.handleChangeLink} />
                            )}
                        />
                        <Route
                            path="/home"
                            component={() => (
                                <Home onChangeLink={this.handleChangeLink} />
                            )}
                        />
                        <Route path="/about" component={() => <About />} />
                        <Route
                            path="/experience"
                            component={() => <Experience />}
                        />
                        <Route path="/project" component={() => <Project />} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Main;
