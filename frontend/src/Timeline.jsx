import React from "react";
import './Timeline.css';

export default function Timelinee2(){
return(
  <section className="container">
  <h1 className="eve">EVENT TIMELINE</h1>
  <div className="phs">
  <div className="ph" id="ph1">
  <h1 className="phase">Phase1 :</h1> 
  <img src="../src/assets/firstim.png" alt="non" width="400" />
  <h1 className="title">Dear bender</h1>
    <ul className="list">
    <li className="point">openning ceremony</li> 
    <li className="point">workshops</li>
    <li className="point">first challenge (WATER TRIBE)</li>
    </ul>
  </div>
  <div className="ph" id="ph2">
  <h1 className="phase">Phase2 :</h1> 
  <img src="../src/assets/secondim.png" alt="non" width="400" />
  <h1 className="title">BE READY</h1>
    <ul className="list">
    <li className="point">challenges 2,3,4 (FIRE, EARTH, AIR)</li> 
    <li className="point">sabotaging tests</li>
    <li className="point">obtention of codes 2,3 and 4</li>
    </ul>
  </div>
  <div className="ph" id="ph3">
  <h1 className="phase">Phase3 :</h1> 
  <img src="../src/assets/thirdim.png" alt="non" width="400" />
  <h1 className="title">BE READY</h1>
    <ul className="list">
    <li className="point">Finale catch the flag</li> 
    <li className="point">Closing ceremony</li>
    <li className="point">Networking</li>
    </ul>
  </div>
  </div>
  </section>
);
};
