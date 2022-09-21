import React, {  useEffect } from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";
import Routes from "../routes";
import AuthProvider from "../providers/Auth";

const Pages = () => {
    useEffect(() => {
        document.title = 'Welcome | Chat App';
    });

    return (
            <div className="pages">
                <Router>
                    <AuthProvider>
                        <Routes />
                    </AuthProvider>
                </Router>
            </div>

    );
}

export default Pages;