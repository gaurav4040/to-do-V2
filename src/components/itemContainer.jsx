import styles from "./itemContainer.module.css";

const ItemContainer = ({ todoName, todoDate }) => {
    return (
        <div className={`container `}>
            <div className="row Grow">
                <div className={`${styles["item_Container"]} ${styles["nameContainer"]} ${styles["Grow"]} col-6`}>{todoName}</div>
                <div className={`${styles["dateContainer"]} ${styles["Grow"]} col-4`}>{todoDate}</div>
                <div className="col-2"><button type="button" className={`${styles["Gbutton"]} ${styles["Grow"]} btn btn-danger`}>Delete</button></div>
            </div>         
        </div>
    );

}

export default ItemContainer;