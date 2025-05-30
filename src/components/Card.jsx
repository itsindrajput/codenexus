import React from "react";
import style from "./Card.module.css";

const Card = ({ image, title, description, index }) => {
  return (
    <div className={style.card}>
      {index > 0 && <div className={style.card_separator}></div>}
      <img src={image} alt={title} className={style.card_image} />
      <div className={style.card_content}>
        <h2 className={style.card_title}>{title}</h2>
        <p className={style.card_description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
