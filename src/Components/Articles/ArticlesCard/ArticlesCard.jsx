import React from "react";
import "./ArticlesCard.css";

const ArticleCard = ({ title, children }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{title}</h2>
      <p className="article-body">{children}</p>
    </div>
  );
};

export default ArticleCard;
