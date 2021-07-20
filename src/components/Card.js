import React, { useState } from "react";
const Card = ({ data }) => {
  return (
    <>
      <section className="section card--section">
        {data.map((card, index) => (
          <div className="card card--wrapper">
            <span className="card_name">{card.name}</span>
            <div className="img__wrapper">
              <img className="card_img" alt={card.alt} src={card.img} />
            </div>
            <span className="card_model">Model {card.model}</span>
            <span className="card__desc">{card.desc}</span>
            <span className="card__price">{card.price}</span>
            <span className="card__shipping">{card.shipping}</span>
            <div className="card__size">
              <span className="text__size">SIZE:</span>
              <select className="select__size">
                {card.size.map((inner) => (
                  <option>{inner}</option>
                ))}
              </select>
            </div>
            <div className="card__color">
              <span className="text__color">COLOR:</span>
              <select className="select__color">
                {card.color.map((inner) => (
                  <option>{inner}</option>
                ))}
              </select>
            </div>

            <div className="card__quantity">
              <span className="text__quantity">QUANTITY:</span>
              <select className="select__quantity">
                {card.quantity.map((inner) => (
                  <option>{inner}</option>
                ))}
              </select>
            </div>
            <button className="card__button">ADD TO CART</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
