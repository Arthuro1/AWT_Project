import React from 'react'

import avatar from '../images/avatar.jpg'

export default ({ chats }) => (
    <ul>
        {chats.map(chat => {
            console.log("chat", chat);
            return (
                <div key={chat.id}>
                    <div className="user_avatar">
                        <img src={avatar} alt="..."/>
                    </div>
                    <div className="comment_body">
                        <p>{chat.message}</p>
                    </div>

                    <div className="comment_toolbar">
                        <div className="comment_details">
                            <ul>
                                <li><i className="fa fa-clock-o fa-2x"/> 13:94</li>
                                <li><i className="fa fa-calendar fa-2x"/> 04/01/2015</li>
                                <li><i className="fa fa-pencil fa-2x"/> <span className="user">{chat.username}</span></li>
                            </ul>
                        </div>
                        <div className="comment_tools">
                            <ul>
                                <li><i className="fa fa-reply fa-2x"/></li>
                                <li><i className="fa fa-heart love fa-2x"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        })}
    </ul>
);
