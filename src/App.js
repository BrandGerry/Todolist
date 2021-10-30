import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import Loader from "./components/Loader";

const App = () => {
  //STATE
  const [todolist, setTodoList] = useState([])
  

  //EFFECT
  useEffect(() =>{
    const handleTodoList = async () =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const resultTodoList = result.slice(0,20);
      setTodoList(resultTodoList); //Setear el todolist
    }
    setTimeout(() =>{
      handleTodoList();},3000);
  },[]);
 
  //FUNCIONES
  //Tenemos que ver a cual le doy click con el ID y el status Completed o incompleted
 
  return (
    <div className="App">
      <Header/>
      {
        todolist ?todolist.map(singleTodo =>( //Siempre decir si todolist existe haz esto
          <>
          <h1>{singleTodo.title}</h1>
          </>
        )) : <Loader/>
      }
    </div>
  );
};

export default App;