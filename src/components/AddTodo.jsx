import styles from "./AddTodo.module.css"

export default function AddTodo() {
    return <div class="container text-center">
        <div class="row">
            <div class="col-6">
                <input  type="text" placeholder="Enter the task" />
            </div>
            <div class="col-4">
                <input  type="date" />
            </div>
            <div class="col-2">
                <button class={`${styles["Gbutton"]} btn btn-success`}>Add</button>
            </div>
        </div>
    </div>
}