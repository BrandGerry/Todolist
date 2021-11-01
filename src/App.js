import React, { useState, useEffect } from "react";
import "./styles/App.css";

//Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Loader from "./components/Loader";
import Filter from "./components/Filter";


const App = () => {

  //STATE
  //Primer state para guardar todos
  //Segundo para separarlos por palabras
  //Tercero para el contador
  const [toDoList, setToDoList] = useState(null);
  const [filter, setFilter] = useState("TODOS");
  const [count, setCount] = useState(0);
  
  //EFFECT
  //Usamos para hacer la peticion a la API
  useEffect(() =>{
    const handleTodoList = async () =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const resultTodoList = result.slice(0,20);
      setToDoList(resultTodoList); //Setear el todolist
    };
      handleTodoList();
  },[]);

  //Filtramos el todolist con su parte completa si no esta seleccionado
  useEffect(() => {
    const uncompletedTasks = toDoList ?.filter(
      (item) => item.completed === false,
    );
    setCount(uncompletedTasks?.length);
  }, [toDoList]);

  //FUNCIONES
   //Tenemos que ver a cual le doy click con el ID y el status Completed o incompleted
  const handleCompleteToDo = (id) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };
  
  return (
    <div className="App">
      <Header count={count} />
      <Filter setFilter={setFilter} filter={filter} />
      <div className="todo-container">
        {toDoList ? (
          filter === "TODOS" ? (
            toDoList?.map((item) => (
              <Todo
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.completed}
                handleCompleteToDo={handleCompleteToDo}
              />
            ))
          ) : filter === "Complete" ? (
            toDoList?.map((item) =>
              item.completed === true ? (
                <Todo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.completed}
                  handleCompleteToDo={handleCompleteToDo}
                />
              ) : null,
            )
          ) : filter === "Incomplete" ? (
            toDoList?.map((item) =>
              item.completed === false ? (
                <Todo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.completed}
                  handleCompleteToDo={handleCompleteToDo}
                />
              ) : null,
            )
          ) : null
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;