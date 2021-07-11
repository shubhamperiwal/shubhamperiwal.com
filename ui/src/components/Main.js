import React, { Component } from "react";
import Home from "./Home";
import Experience from "./Experience";
import Achievement from "./Achievement";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Current from "./Current";

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
        } else if (path === "/achievement") {
            link = "achievement";
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
                    <Header
                        activeLink={this.state.activeLink}
                        onChangeLink={this.handleChangeLink}
                    />
                    <Switch>
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
                        <Route
                            path="/experience"
                            component={() => <Experience />}
                        />
                        <Route
                            path="/achievement"
                            component={() => <Achievement />}
                        />
                        <Route
                            path="/current"
                            component={() => <Current />}
                        />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Main;
