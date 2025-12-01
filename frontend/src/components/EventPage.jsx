import React from "react";
import "./EventPage.css";
import { assets } from "../assets/assets";

export default function EventPage() {
  return (
    <div className="avatar-container">
      {/* Background photo */}
      <div className="background-photo">
        <img src={assets.avatarBackground} alt="Avatar Event Background" />
        
        {/* Overlay text content */}
        <div className="text-content">
          
            <h1 className="title ">ABOUT THE EVENT</h1>
          

          <div className="middle-photo-section w-200 h-48 ">
            <img 
              src={assets.MiddlePic} 
              alt="Avatar Event" 
              className="middle-photo max-w-md" /* Ajout de max-w-md */
            />
          </div>

          <div className="content-section">
            <p className="main-text">
              AVATECH is a three-day tech event combining a hackathon and mini CTF challenges,
              all inspired by the world of <strong>Avatar: The Last Airbender</strong>.
            </p>
            
            <div className="spacer"></div>
            
            <p className="main-text">
              Participants progress through the <strong>Four Nations</strong>: Water, Earth, Fire, and Air,
              each tied to a programming language and increasing difficulty.
            </p>
            
            <div className="spacer"></div>
            
            <p className="main-text">
              Teams solve challenges, earn encrypted codes, and face a final <strong>Catch The Flag</strong>
              battle to claim victory!
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
}