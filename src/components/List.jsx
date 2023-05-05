import React from "react";
import Person from "./Person";

const List = ({ birthday }) => {
  return (
    <div>
      <h3>
        {birthday.length} Birthday{birthday.length <= 1 ? "" : "s"} today{" "}
      </h3>
      {birthday.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
};

export default List;
