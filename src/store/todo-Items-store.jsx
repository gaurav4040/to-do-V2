import { createContext,useReducer } from "react";

export const TodoItemsContext = createContext(
    {
        todoItemsArray:[],
        addNewItem:()=>{},
        DeleteItem:()=>{}
    }
);

const todoItemReducer=(currTodoItems,action)=>{
    
    let newTodoItems = currTodoItems;

    if(action.type==='NEW_ITEM'){
       newTodoItems=[
        ...currTodoItems,
        {name:action.payload.nameValue,dueDate:action.payload.dueDateValue}
      ]
    }else if(action.type==='DELETE_ITEM'){
       newTodoItems = currTodoItems.filter((item)=>item.name !== action.payload.todoName);
    }
    return newTodoItems;  
  };


const TodoItemsContextProvider=({children})=>{
    
    // let initialTodo = [];

    // let [todoItemsArray,setTodoItems]=useState(initialTodo);
    let [todoItemsArray,dispatchTodoItemsArray]=useReducer(todoItemReducer,[]);

    const addNewItem = (nameValue, dueDateValue) => {
     
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

          const addItemAction={
            type:"NEW_ITEM",
            payload:{
              nameValue,
              dueDateValue
            }
          };
          dispatchTodoItemsArray(addItemAction);

          // const newTodo = [
          //   ...todoItemsArray,
          //   { name: nameValue.trim(), dueDate: dueDateValue.trim() },
          // ];
          // setTodoItems((currValue)=>[
          //   ...currValue,
          //   {name:nameValue.trim(),dueDate:dueDateValue.trim()},
          // ]);
        }
      }
    };
    
  const DeleteItem=(todoName)=>{
    
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        todoName
      }
    };
    dispatchTodoItemsArray(deleteItemAction);

      // const newTodo = todoItemsArray.filter((item)=>item.name !== todoName);
      // setTodoItems(newTodo);

  }
    return (
      <TodoItemsContext.Provider 
        value={{
        todoItemsArray,
        addNewItem,
        DeleteItem,
        }} >{children} 
        </TodoItemsContext.Provider>
    );
};

export default TodoItemsContextProvider;