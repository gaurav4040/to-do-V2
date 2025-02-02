import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css"
import { TodoItemsContext } from "../store/todo-Items-store";

export default function AddTodo() {

    let contextObj = useContext(TodoItemsContext);
    let handleInput = contextObj.addNewItem;

    let todoName=useRef();
    let todoDate=useRef();
 
    const addButtonClicked=(event)=>{
        event.preventDefault();
        const name=todoName.current.value;
        const date=todoDate.current.value;
        handleInput(name,date);
        todoName.current.value="";
        todoDate.current.value="";
    }

    return (
    <div className={`container text-center ${styles.inputContainer}`}>
        <form className={`row ${styles.inputContainer}`}>
            <div className={`col-6 ${styles.inputContainer}`}>
                <input  type="text"
                ref={todoName}
                className={`${styles.inputbox} form-control me-2`}
                 placeholder="Enter the task" 
                //  value={TaskValue}
                  />
            </div>
            <div className={`col-4 ${styles.inputContainer}`}>
                <input  type="date"
                ref={todoDate}
                 className={`${styles.inputbox} ${styles.date} form-control me-2`}
                //  value={dateValue} 
                 />
            </div>
            <div className={`col-2 ${styles.inputContainer}`}>
                <button 
                  className={`${styles["Gbutton"]} btn btn-success`}
                  onClick={addButtonClicked} >Add</button>
            </div>
        </form>
    </div>
    )
};