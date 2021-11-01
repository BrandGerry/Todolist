import React from "react";

//Estilos
import "../styles/Header.css";

const Header = ({ count }) => {
  return (
    <header className="logo">
      <h4>To do list</h4>
      <div className="task-to-complete">
        <p>Tasks to complete</p>
        <p>{": " + count}</p>
        
      </div>
    </header>
  );
};

export default Header;
