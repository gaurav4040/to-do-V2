  import AppNameBar from "./components/AppNameBar";
  import AddTodo from "./components/AddTodo";
  import WelcomeMessage from "./components/welcomeMessage";
  import TodoItems from "./components/todoItems";
  import "./App.css";
  import { useState } from "react";

  function App() {
    
  
    let initialTodo = [];

    let [todoItems,setTodoItems]=useState(initialTodo);

    const onClickAdd = (nameValue, dueDateValue) => {
     
      if (nameValue.trim() === "" || dueDateValue.trim() === "") {
        alert("Enter a valid value");
      } else {
        const bool = todoItems.some(
          (item) =>
            item.name.toLowerCase() === nameValue.trim().toLowerCase() &&
            item.dueDate === dueDateValue.trim()
        );
    
        if (bool) {
          alert("Already Entered");
        } else {
          const newTodo = [
            ...todoItems,
            { name: nameValue.trim(), dueDate: dueDateValue.trim() },
          ];
          setTodoItems(newTodo);
        }
      }
    };
    
  const onClickDelete=(todoName)=>{
  
      const newTodo = todoItems.filter((item)=>item.name !== todoName);
      setTodoItems(newTodo);

  }
    
    return (
      <>
      <div>
          <AppNameBar />
      </div>
      <center className="todo-container">
          <AddTodo handleInput={onClickAdd} />
          {todoItems.length===0&&<WelcomeMessage/>}
          <TodoItems todoItems={todoItems} handleDelete={onClickDelete} />
        </center>
      </>
      
    );
  }

  export default App;
