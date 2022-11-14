import React from 'react'
import "./Topbar.css";
import pokeball from "../images/pokeball_shadow.png";
import pokeballcolor from "../images/pokeball_black.png";

export const Topbar = () => {
  return (
    <div className="title">
        <div className="title-left">
            <p>ポケモン図鑑</p>
            <div className="caught-seen">
                <div className="caught">
                    <img src={pokeballcolor} alt="" 
                    style={{width:"30px",marginRight:"10px"}}
                    />
                    <p>438</p>
                </div>
                <div className="seen">
                    <img src={pokeball} alt="" 
                    style={{width:"30px",marginRight:"10px"}}
                    />
                    <p>905</p>
                </div>
            </div>
        </div>
        <p style={{color:"white"}}>A -&gt; Z</p>
    </div>
  )
}
