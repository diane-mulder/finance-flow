import React from "react";
import '../App.css';

export default function Footer() {
    return (
        <div className="footer">

            <div className="footer-account">
              <i class="fa-light fa-house" style="color: #ffffff;"></i>
              <h2>COMPTE</h2>  
            </div>

            <div className="footer-transaction">
                <i class="fa-light fa-arrow-right-arrow-left" style="color: #ffffff;"></i>
                <h2>TRANSACTION</h2> 
            </div>

            <div className="footer-profil">
                <i class="fa-light fa-user" style="color: #ffffff;"></i>
                <h2>PROFIL</h2> 
            </div>
            
        </div>
    )
}