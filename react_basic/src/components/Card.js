import React from "react";
//import img1 from "../images/img1.png";
import star from "../images/star.png";
import "../styles.css";

export default function Card(props){
    return(
        <div className="card">
{props.openSpots===0 && <div className="card--badge">SOLD OUT</div>}
        <img src={require(`../images/${props.img}`)} className="card--image"  alt="nf"/>
        
        <div className="card--stats">
            <img src={star} className="card--star" alt="nf"/>
            <span>{props.rating}</span>
            <span className="grey">({props.reviewCount}) • </span>
            <span className="grey">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p><span className="card--price">From ${props.price}</span> / person</p>
    </div>
    )
}