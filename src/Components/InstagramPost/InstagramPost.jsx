import React from "react";
import "./InstagramPost.css";

const InstagramPost = ({ avatar, username, image, description }) => {
  return (
    <div className="instagram-post">
      <div className="post-header">
        <img src={avatar} alt={username} className="avatar" />
        <span className="username">{username}</span>
      </div>
      <img src={image} alt="Post" className="post-image" />
      <div className="post-body">
        <a 
          href={description} 
          target="_blank" 
          rel="noopener noreferrer"
          className="post-link"
        > 
        Check it out on our IG!
        </a>
      </div>
    </div>
  );
};

export default InstagramPost;
