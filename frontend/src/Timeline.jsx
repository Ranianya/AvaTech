import React from "react";
import './Timeline.css'
export default function Aze() {
 
  
    return(
      <section className="container">
        <div className="title">
          <h1>
            THE EVENT TIMELINE 
          </h1>
        </div>
        <div className="day1">
            <h1 className="date1">DATE :</h1>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">9:00 AM</h1>
              </div>
              <h1 className="info">Check-in</h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">9:30 AM</h1>
              </div>
              <h1 className="info">Opening Ceremony </h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">10:00 AM</h1>
              </div>
              <h1 className="info">Workshops</h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">12:30 PM</h1>
              </div>
              <h1 className="info">Lunch Break </h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">13:30 PM</h1>
              </div>
              <h1 className="info">Start of the first competetion</h1>
            </div>
        </div>
        <div className="day2">
            <h1 className="date1">DATE :</h1>
            <div className="double2">
              
              <h1 className="info">Check-in</h1>
              <div className="circle">
                <h1 className="date-in">9:30 AM</h1>
              </div>
            </div>
            <div className="double2">
             
              <h1 className="info">Second workshop </h1>
              <div className="circle">
                <h1 className="date-in">10:00 AM</h1>
              </div>
            </div>
            <div className="double2">
             
              <h1 className="info">lunch break</h1>
              <div className="circle">
                <h1 className="date-in">12:00 PM</h1>
              </div>
            </div>
            <div className="double2">
              
              <h1 className="info">second competion</h1>
              <div className="circle">
                <h1 className="date-in">13:30 PM</h1>
              </div>
            </div>
        </div>
        <div className="day1">
            <h1 className="date1">DATE</h1>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">9:00 AM</h1>
              </div>
              <h1 className="info">Check-in</h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">9:30 AM</h1>
              </div>
              <h1 className="info">third workshop </h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">11:00 AM</h1>
              </div>
              <h1 className="info">Lunch Break</h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">12:30 PM</h1>
              </div>
              <h1 className="info">last competion (catch the flag) </h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">16:00 PM</h1>
              </div>
              <h1 className="info">snack break</h1>
            </div>
            <div className="double">
              <div className="circle">
                <h1 className="date-in">16:30 PM</h1>
              </div>
              <h1 className="info">closing ceremony / winner announcement / networking</h1>
            </div>
        </div>
        
      </section>
    );  
};

