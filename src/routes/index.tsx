import {useRoutes} from "react-router-dom";
import Auth from "../pages/Auth";
import Chat from "../pages/Chat";

const Routes = () => {
    return useRoutes([
        {path: "/", element: <Auth/>},
        {path: "/", element: <Chat/>},
    ]);
};

export default Routes;