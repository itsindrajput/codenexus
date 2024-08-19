import React from "react";
import style from "./Card.module.css";

const Card = ({ image, title, description, index }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.card_image} />
      <div className={style.card_content}>
        <h2 className={style.card_title}>{title}</h2>
        <p className={style.card_description}>{description}</p>
      </div>
      {index < 3 && <div className={style.card_separator}></div>}
    </div>
  );
};

export default Card;
