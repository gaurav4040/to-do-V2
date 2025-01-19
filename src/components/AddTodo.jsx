import { useState } from "react";
import styles from "./AddTodo.module.css"

export default function AddTodo({handleInput}) {

    let [TaskValue,setTaskValue] = useState();
    let [dateValue,setDateValue] = useState();

    const inputTask=(event)=>{
       
         setTaskValue(event.target.value);
        
    }
    const inputDate=(event)=>{
           setDateValue(event.target.value);
    }
    const addButtonClicked=()=>{
        handleInput(TaskValue,dateValue);
        setTaskValue("");
        setDateValue("");
    }

    return (
    <div className={`container text-center ${styles.inputContainer}`}>
        <div className={`row ${styles.inputContainer}`}>
            <div className={`col-6 ${styles.inputContainer}`}>
                <input  type="text"
                className={`${styles.inputbox} form-control me-2`}
                 placeholder="Enter the task" 
                 value={TaskValue}
                 onChange={(event)=>{inputTask(event)}} />
            </div>
            <div className={`col-4 ${styles.inputContainer}`}>
                <input  type="date"
                 className={`${styles.inputbox} ${styles.date} form-control me-2`}
                 value={dateValue} 
                 onChange={(event)=>{inputDate(event)}} />
            </div>
            <div className={`col-2 ${styles.inputContainer}`}>
                <button 
                  className={`${styles["Gbutton"]} btn btn-success`}
                  onClick={addButtonClicked} >Add</button>
            </div>
        </div>
    </div>
    )
}