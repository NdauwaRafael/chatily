import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: {
    children: any
}) => {
    const { username } = useSelector(
        (state: any) => state.auth
    )
    const navigate = useNavigate();

    const redirectToHome = () => {
        if (
            window.location.pathname !== '/'
        ) {
            navigate("/", { replace: true })
        }
    };


    useEffect(() => {
        if (!username) {
            return redirectToHome();
        }
        else{
            return navigate("/chat", { replace: true });
        }
    }, [username]);

    return <>{children}</>;
};

export default AuthProvider;