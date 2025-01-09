
import ItemContainer from "./itemContainer";

const TodoItem = ({ todoItems }) => {
    return (
        <>
            <div className="items-container">
                {todoItems.map((item)=>(
                <ItemContainer todoDate={item.dueDate} todoName={item.name} />
                ))}
            </div>
        </>
    )
};

export default TodoItem;