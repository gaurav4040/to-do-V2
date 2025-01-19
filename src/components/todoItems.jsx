
import ItemContainer from "./itemContainer";

const TodoItem = ({ todoItems,handleDelete }) => {
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