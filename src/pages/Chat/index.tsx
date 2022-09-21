
import React, {useEffect, useState} from "react";
import "../../assets/sass/chat.css";
import {useAppDispatch} from "../../redux/hooks";
import {sendMessage, getMessages} from "../../redux/slices/chat";
import {useSelector} from "react-redux";

const Chat = () => {
    const { chats } = useSelector(
        (state: any) => state.chat
    )
    const [message, setMessage] = useState("");
    const dispatch = useAppDispatch();

    const submitMessage = () => {
        dispatch(sendMessage({message}));
    }

    useEffect(()=>{
        window.addEventListener('storage', () => {
            dispatch(getMessages())
        });

    }, [dispatch]);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8 col-offset-2">
                    <div className="box box-primary direct-chat direct-chat-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Chat Room</h3>

                            <div className="box-tools pull-right">
                                <span data-toggle="tooltip" title="" className="badge bg-light-blue">{chats.length}</span>
                                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                    className="fa fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-box-tool" data-toggle="tooltip"
                                        title="Contacts" data-widget="chat-pane-toggle">
                                    <i className="fa fa-comments"></i></button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove"><i
                                    className="fa fa-times"></i></button>
                            </div>
                        </div>

                        <div className="box-body">
                            <div className="direct-chat-messages">
                                {
                                    chats.map((chat: any, index: any)=>(
                                        <div key={index} className={"direct-chat-msg mt-3 mb-5 " + (chat.id == sessionStorage.tabID ? "right": " ")}>
                                            <div className="direct-chat-info clearfix">
                                                <span className={"direct-chat-name mr-2 " +  (chat.id == sessionStorage.tabID ? "pull-right" : " pull-left ")}>{chat.username}</span>
                                                <span className={"direct-chat-timestamp " + (chat.id == sessionStorage.tabID ? "pull-left" : "pull-right")}>{chat.time}</span>
                                            </div>
                                            <img className="direct-chat-img" src={chat.id == sessionStorage.tabID ? "https://bootdey.com/img/Content/user_2.jpg" : "https://bootdey.com/img/Content/user_1.jpg"}
                                                 alt="Message User Image" />
                                            <div className="direct-chat-text">
                                                {
                                                    chat.message
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="box-footer">
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input type="text"
                                           value={message}
                                           name="message"
                                           placeholder="Type Message ..."
                                           className="form-control mr-5"
                                           onChange={(e) => setMessage(e.target.value)}/>
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary btn-flat" onClick={()=> submitMessage()}>Send</button>
                                      </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;