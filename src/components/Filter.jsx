import React from "react";

//Stylos
import "../styles/Filter.css";

const Filter = ({ setFilter, Filter }) => {
  return (
    <ul className="filter-buttons">
      <li>
        <button
          className={
            Filter === "Incomplete"
              ? "selectColorStyle"
              : "incompleteButton"
          }
          onClick={() => setFilter("Incomplete")}
        >
          Incomplete
        </button>
      </li>
      <li>
        <button
          className={
            Filter === "Complete" ? "selectColorStyle" : "completeButton"
          }
          onClick={() => setFilter("Complete")}
        >
          Complete
        </button>
      </li>
      <li>
        <button
          className={Filter === "TODOS" ? "selectColorStyle" : "allButton"}
          onClick={() => setFilter("TODOS")}
        >
          TODOS
        </button>
      </li>
    </ul>
  );
};

export default Filter;