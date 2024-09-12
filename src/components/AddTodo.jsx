/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    // console.log(event);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event);
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className={`"container text-center" ${styles.AddTodo}`} >
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`"btn btn-success" ${styles.button}`}
            // onClick={() => onNewItem("a", "b")}
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
