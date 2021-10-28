import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import Todo from "./components/Todo";


const App = () => {
  //STATE
  const [dataAPI, setDataAPI] = useState([]);

  //EFFECT
  useEffect(() =>{
    const handleDataApi = async () =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const todos = result.slice(0,20)
      setDataAPI(todos)
    }
    handleDataApi();
  },[]);
 
  //FUNCIONES
  //Tenemos que ver a cual le doy click con el ID y el status Completed o incompleted
  
  const handleTodo = (id) =>{
    //alert("Si jaladeras"); Nada mas para ver si jala
    //Para obtener todos los arreglos menos el qie nos piden spread
    setDataAPI(dataAPI.map(todo => todo.id === id ? {...todo , completed : !todo.completed} : todo))

  }
 
  return (
    <div className="App">
      <Header/>
      {
        //Hago un mapeo de setdatapi que contiene los valores de la api
        //Medainte props se las mandaremos al todo
        dataAPI.map(todo =>(
          <Todo 
            title={todo.title} 
            status={todo.completed} 
            handleTodo={handleTodo}
            id={todo.id}
          />
        ))
      }

    </div>
  );
};

export default App;