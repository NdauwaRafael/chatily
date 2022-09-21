import React, { useEffect } from "react";


const Auth = () => { 
    useEffect(() => {
        document.title = 'Authenticate to Chat | Chat App';
    });

    return (
        <div className="container page">
            <div className="auth-form d-flex justify-content-center flex-column align-items-center page row">
                <div className="row col-md-6">
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-md-12">
                        <button type="button" className="btn btn-primary">Start Chatting</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;