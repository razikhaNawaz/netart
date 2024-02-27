import React from "react";
import logo from "../src/assets/logo.png";
import img1 from "../src/assets/1.png";
import img2 from "../src/assets/2.png";
import img3 from "../src/assets/3.png";
import './App.css';


const App = () => {
  return (
    <div className="parent">
      <div className="c1">
        <img src={logo} alt="logo" width="200px" />
      </div>
      <div className="c2">
        <div className="child1">
          <img src={img1} alt="one" width='400px' height='550px' />
        </div>
        <div className="child2">
          <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src={img2} alt="two" width='900px' height='300px' />
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div className="c3">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      </div>
      <div className="c4">
        <img src={img3} alt="three" width='1100px' height='400px' />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <div className="line"></div>
      </div>
      <div className="c5" >
  <p><bold>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</bold></p>
  <p>CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS | PHARMA SUGARS & DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</p>
</div>

      
    </div>
  );
};

export default App;
