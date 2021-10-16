import React from "react";

const Item = (props) => {
  return (
    <div>
      <div className="image">
        <img src="/Multimedia/Hidroponia-eficiencia.png" alt="algo paso" />
      </div>
      <div className="name">
        <h2>{props.nombre}</h2>
      </div>
    </div>
  );
};

export default Item;
