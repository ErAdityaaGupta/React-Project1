/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
// import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className={`container text-center  ${styles.todoItem}`}>
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
            {/* <MdDelete /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
