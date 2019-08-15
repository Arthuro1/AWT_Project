import React from 'react';

import avatar from '../images/avatar.jpg';
import TimeAgo from 'react-timeago/lib/index';

export default ({chats}) => (
  <ul className="user_comment">
    {chats.map(chat => {
      console.log('chat', chat);
      return (
        <div key={chat._id}>
          <div className="user_avatar">
            <img src={avatar} alt="..." />
          </div>
          <div className="comment_body">
            <p>{chat.message}</p>
          </div>

          <div className="comment_toolbar">
            <div className="comment_details black">
              <ul>
                <li>
                  <i className="fa fa-clock-o fa-2x" />{' '}
                  <TimeAgo date={chat.creationDate} />
                </li>
                <li>
                  <i className="fa fa-pencil fa-2x" />{' '}
                  <span className="user">{chat.author.username}</span>
                </li>
              </ul>
            </div>
            <div className="comment_tools">
              <ul>
                <li>
                  <i className="fa fa-heart love fa-2x" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    })}
  </ul>
);
