import React from "react";
import "./Thefournations.css";
import fire from "../assets/fire.png";
import water from "../assets/water.png";
import air from "../assets/air.png";
import earth from "../assets/earth.png";

export default function TheFournations() {
  const nations = [
    {
      name: "FIRE NATION",
      img: fire,
      desc: "POWER IS THE ONLY THING THAT MATTERS " ,
      buttonClass: "btn-fire",
      cardClass: "fire-card"
    },
    {
      name: "WATER TRIBE",
      img: water,
      desc: "WATER IS STRONG,BUT DISCIPLINE IS STRONGER" ,
        buttonClass: "btn-water",
        cardClass: "water-card"
    },
    {
      name: "AIR NOMADS",
      img: air,
      desc: "A FLEXIBLE MIND BENDS WITHOUT BREAKING" ,
        buttonClass: "btn-air",
        cardClass: "air-card"
    },
    {
      name: "EARTH KINGDOM",
      img: earth,
      desc: "EARTH BENDS TO THOSE WHO ARE STRONG" ,
        buttonClass: "btn-earth",
        cardClass: "earth-card"
    },
  ];
  return (
    <div className="tf-container">
      <h1 className="tf-title">THE FOUR NATIONS</h1>
      <div className="tf-images-grid">
        {nations.map((nation) => (
         <div className={`tf-card ${nation.cardClass}`} key={nation.name}>
            <h3 className="tf-card-title">{nation.name}</h3>
            <img src={nation.img} alt={nation.name} className="tf-image" />
            <p className="tf-card-desc">{nation.desc}</p>
            <button className={`tf-card-button ${nation.buttonClass}`}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}