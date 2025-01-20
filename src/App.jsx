  import AppNameBar from "./components/AppNameBar";
  import AddTodo from "./components/AddTodo";
  import WelcomeMessage from "./components/welcomeMessage";
  import TodoItems from "./components/todoItems";
  import "./App.css";
  import { useState } from "react";
  import { todoItemsContext } from "./store/todo-Items-store";

  function App() {
    
  
    let initialTodo = [];

    let [todoItemsArray,setTodoItems]=useState(initialTodo);

    const onClickAdd = (nameValue, dueDateValue) => {
     
      if (nameValue.trim() === "" || dueDateValue.trim() === "") {
        alert("Enter a valid value");
      } else {
        const bool = todoItemsArray.some(
          (item) =>
            item.name.toLowerCase() === nameValue.trim().toLowerCase() &&
            item.dueDate === dueDateValue.trim()
        );
    
        if (bool) {
          alert("Already Entered");
        } else {
          const newTodo = [
            ...todoItemsArray,
            { name: nameValue.trim(), dueDate: dueDateValue.trim() },
          ];
          setTodoItems((currValue)=>[
            ...currValue,
            {name:nameValue.trim(),dueDate:dueDateValue.trim()},
          ]);
        }
      }
    };
    
  const onClickDelete=(todoName)=>{
  
      const newTodo = todoItemsArray.filter((item)=>item.name !== todoName);
      setTodoItems(newTodo);

  }
    
    return (
      <>
      <todoItemsContext.Provider value={todoItemsArray} >
        <div>
            <AppNameBar />
        </div>
        <center className="todo-container">
            <AddTodo handleInput={onClickAdd} />
            <WelcomeMessage />
            <TodoItems handleDelete={onClickDelete} />
          </center>
      </todoItemsContext.Provider >
      </>
      
    );
  }

  export default App;
