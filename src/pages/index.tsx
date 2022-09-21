import React, { Fragment, useEffect } from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";
import Routes from "../routes";

const Pages = () => {
    useEffect(() => {
        document.title = 'Welcome | Chat App';
    });
    return (
        <Fragment>
            <div className="pages">
                <Router>
                    <Routes />
                </Router>
            </div>
        </Fragment>    
    );
}

export default Pages;