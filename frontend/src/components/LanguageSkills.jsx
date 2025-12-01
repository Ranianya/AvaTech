import React from "react";
import "./LanguageSkills.css";

export default function LanguageSkills() {
  return (
    <div className="page">
      <h1 className="title">LANGUAGES</h1>

      {/* This container only holds the language cards now */}
      <div className="cards-container">

        {/* PYTHON */}
        <div className="card">
          <div className="img-box"> 
                <img src="/src/assets/9293.jpg" alt="PYTHON" />
            </div>
          <h2 className="lang-title">PYTHON</h2>
        </div>
        
        {/* JAVA */}
        <div className="card green">
          <div className="img-box"> 
                <img src="/src/assets/9296.jpg" alt="JAVA" />
            </div>
          <h2 className="lang-title">JAVA</h2>
        </div>
        
        {/* C++ */}
        <div className="card red">
          <div className="img-box"> 
                <img src="/src/assets/9299.jpg" alt="C++" />
            </div>
          <h2 className="lang-title">C++</h2>
        </div>
        
        {/* JAVASCRIPT */}
        <div className="card blue">
          <div className="img-box"> 
                <img src="/src/assets/9302.jpg" alt="JAVASCRIPT" />
            </div>
          <h2 className="lang-title">JAVASCRIPT</h2>
        </div>

      </div> {/* End of cards-container */}
      
      {/* NEW: Container for ALL FOUR level buttons */}
      <div className="level-buttons-container">
        <button className="btn">BEGINNER</button> {/* Now a button */}
        <button className="btn">INTERMEDIATE</button>
        <button className="btn">ADVANCED</button>
        <button className="btn">EXPERT</button>
      </div>

    </div>
  );
}