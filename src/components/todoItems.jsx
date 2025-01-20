import { todoItemsContext } from "../store/todo-Items-store";
import { useContext } from "react";
import ItemContainer from "./itemContainer";

const TodoItem = ({handleDelete }) => {

    const todoItems = useContext(todoItemsContext);

    return (
        <>
            <div className="items-container">
                {todoItems.map((item)=>(
                <ItemContainer todoDate={item.dueDate} todoName={item.name} handleDelete={handleDelete} />
                ))}
            </div>
        </>
    )
};

export default TodoItem;