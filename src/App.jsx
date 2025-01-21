  import AppNameBar from "./components/AppNameBar";
  import AddTodo from "./components/AddTodo";
  import WelcomeMessage from "./components/welcomeMessage";
  import TodoItems from "./components/todoItems";
  import "./App.css";
  import  TodoItemsContextProvider  from "./store/todo-Items-store";




  function App() {
    
  
    return (
      
      <TodoItemsContextProvider>
        <div>
            <AppNameBar />
        </div>
        <center className="todo-container">
            <AddTodo  />
            <WelcomeMessage />
            <TodoItems />
          </center>
      </TodoItemsContextProvider>
      
      
    );
  }

  export default App;
