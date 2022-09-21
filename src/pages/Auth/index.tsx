import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { sendUsername } from "../../redux/slices/auth";


const Auth = () => { 
    const [username, setUserName] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.title = 'Authenticate to Chat | Chat App';
    });

    const submitUsername = () => {
        dispatch(sendUsername({username}));
    }

    return (
        <div className="container page">
            <div className="auth-form d-flex justify-content-center flex-column align-items-center page row">
                <div className="row col-md-6">
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-md-12" onClick={()=>submitUsername}>
                        <button type="button" className="btn btn-primary">Start Chatting</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;