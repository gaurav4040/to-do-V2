import { TodoItemsContext } from "../store/todo-Items-store";
import { useContext } from "react";
import ItemContainer from "./todoContainer";

const TodoItem = () => {

    const contextObj = useContext(TodoItemsContext);
    let todoItems = contextObj.todoItemsArray;

    return (
        <>
            <div className="items-container">
                {todoItems.map((item)=>(
                   <ItemContainer key={item.name+item.dueDate} todoDate={item.dueDate} todoName={item.name} />
                ))}
            </div>
        </>
    )
};

export default TodoItem;