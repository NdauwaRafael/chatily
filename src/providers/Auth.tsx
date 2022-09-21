import { useEffect, useCallback} from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {checkAuthStates} from "../redux/slices/auth";
import {useAppDispatch} from "../redux/hooks";
import Defer from 'lodash.defer';

const AuthProvider = ({ children }: {
    children: any
}) => {
    const dispatch = useAppDispatch();
    const { username, tabId } = useSelector(
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

    const checkAuthState = useCallback(async () => {
        await dispatch(checkAuthStates());
    }, [dispatch])



    useEffect(() => {
        if (!username) {
            return redirectToHome();
        }
        Defer(checkAuthState);
    }, [username, checkAuthState]);

    return <>{children}</>;
};

export default AuthProvider;