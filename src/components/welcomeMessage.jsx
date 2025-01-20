
import { useContext } from "react"; 
import styles from "./welcomeMessage.module.css";
import { todoItemsContext } from "../store/todo-Items-store";

const WelcomeMessage=()=>{

    const todoItems = useContext(todoItemsContext)
    return (
        todoItems.length===0&&<div className={`${styles.welcomeContainer}`}>
            <p className={styles.welcomeText}>
            Welcome , to our To-Do App
            </p>
            <p className={styles.welcomeText}>
                Lets , Start with a New Task
            </p>
        </div>
    )
}

export default WelcomeMessage;
