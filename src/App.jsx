import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/itemContainer";
import TodoItem from "./components/todoItems";
import "./App.css";

function App() {
  const todoItems= [
    {
    name:'buy Milk',
    dueDate:'4/10/2024'
    },
    {
      name:'Go to College',
      dueDate:'05/09/2025'
    },
    {
      name:'sleep',
      dueDate:'02/04/2026'
    }
  ]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem todoItems={todoItems} />
    </center>
  );
}

export default App;
