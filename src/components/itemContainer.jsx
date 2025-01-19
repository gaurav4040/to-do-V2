import styles from "./itemContainer.module.css";

const ItemContainer = ({ todoName,todoDate,handleDelete }) => {

    const alertDelete=(todoName)=>{
        const userResponse=window.confirm(`Are you sure , you want to delete ${todoName} task ?`);
        if(userResponse){
            handleDelete(todoName);
        }
        // handleDelete(todoName);
    };


    return (
        <div className={`container ${styles.item_Container} `}>
            <div className="row Grow">
                <div className={`${styles.taskContainer} row Grow`}>
                    <div className={`${styles["value_Container"]} ${styles["nameContainer"]} ${styles["Grow"]} col-6`}>{todoName}</div>
                    <div className={`${styles["dateContainer"]} ${styles["Grow"]} col-4`}>{todoDate}</div>
                </div>
                <div className={`col-2 ${styles.buttonContainer}`}>
                    <button type="button" 
                    className={`${styles["Gbutton"]} ${styles["Grow"]} btn btn-danger`}
                    onClick={()=>alertDelete(todoName)} >Delete</button>
                </div>
            </div>         
        </div>
    );

}

export default ItemContainer;