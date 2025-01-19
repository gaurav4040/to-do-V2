import styles from "./welcomeMessage.module.css";

const WelcomeMessage=()=>{

    return (
        <div className={`${styles.welcomeContainer}`}>
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
