import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 classname="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p classname="info">{props.tel}</p>
        <p classname="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
