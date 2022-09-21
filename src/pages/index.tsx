import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Auth from "./Auth";
import Chat from "./Chat";
import {checkAuthStates} from "../redux/slices/auth";
import {useAppDispatch} from "../redux/hooks";

const Pages = () => {
    const dispatch = useAppDispatch();

    const { username } = useSelector(
        (state: any) => state.auth
    )

    useEffect(() => {
        document.title = 'Welcome | Chat App';
    }, []);


    useEffect(() => {
        dispatch(checkAuthStates())
    }, [dispatch, sessionStorage.tabID]);

    return (
            <div className="pages">
                {
                    username ? <Chat /> : <Auth />
                }
            </div>

    );
}

export default Pages;