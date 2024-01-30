import React from "react";

import "./style.css";

const Card = ({
  title,
  category,
  like,
  dislikes,
  handleLike,
  handleDelete,
}) => {
  return (
    <div className="cardContent">
      <div className="cardInfo">
        <p className="cardPart">
          <span className="cardTitle">title: </span> {title}
        </p>
        <p className="cardPart">
          <span className="cardTitle">category:</span> {category}
        </p>
        <div className="cardLike">
          <div
            onClick={(e) => {
              e.preventDefault();
              handleLike(+1);
            }}
          >
            <span className="iconify" data-icon="subway:like"></span>
          </div>
          <p>{like}</p>
          <div
            onClick={(e) => {
              e.preventDefault();
              handleLike(-1);
            }}
          >
            <span
              className="iconify"
              data-icon="subway:unlike"
              onClick={() => handleLike(-1)}
            ></span>
          </div>
          <p>{dislikes}</p>
        </div>
        <span onClick={handleDelete} className="cardDelete">
          Delete
        </span>
      </div>
    </div>
  );
};

export default Card;
