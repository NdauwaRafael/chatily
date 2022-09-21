import React, {  useEffect } from "react";
import {
    BrowserRouter as Router, useNavigate
} from "react-router-dom";
import Routes from "../routes";
import AuthProvider from "../providers/Auth";
import {useSelector} from "react-redux";
import Auth from "./Auth";

const Pages = () => {
    const { username } = useSelector(
        (state: any) => state.auth
    )


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