import React from "react";

//Estilos
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h4 className="Todolist">Todolist</h4>
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
        <li>
          <button>Incompleted</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
