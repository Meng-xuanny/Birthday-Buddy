import React from "react";

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} />
      <h4>{name}</h4>
      <p>{age}</p>
    </div>
  );
};

export default Person;
