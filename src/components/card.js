import React from "react";
import CardItem from "./cardItem";
import "./card.css";

function Card() {
  return (
    <>
      <div className="cards">
        <h1>Get ready to HEAL yourself!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                homePage="true"
                src={require("../images/img3.jpg")}
                text="Upload a pic of your herb and get its Scientific name and properties"
                label="Herb Identifier"
                path="/herb-identifier"
              />
              <CardItem
                homePage="true"
                src={require("../images/img_herb_catalogue.png")}
                text="Take a look at our herb catalogue "
                label="Herb Catalogue"
                path="/herb-catalogue"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                homePage="true"
                src={require("../images/img_yoga.jpeg")}
                text="Get to know about specific yogas for your health conditions"
                label="Yoga"
                path="/yoga-poses"
              />
              <CardItem
                homePage="true"
                src={require("../images/img4.jpg")}
                text="Get access to ancient ayurvedic recipes that heal and rejuvenate you"
                label="Recipes"
                path="/vedic-recipies"
              />
              <CardItem
                homePage="true"
                src={require("../images/img5.jpg")}
                text="Take our Dosha quiz and get personalised recommendations based on your health status"
                label="Dosha Quiz"
                path="/dosha-quiz"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
