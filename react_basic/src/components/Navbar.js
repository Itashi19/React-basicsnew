import React from "react";
import "../styles.css";
export default function Navbar(){
    return(
        <nav>
        <img src={require('../images/airbnb.png')} alt="nf" className="nav--logo" />
        </nav>
    )
}


//{<img src="../images/airbnb.png" alt="notfound" className="nav--logo"/>}