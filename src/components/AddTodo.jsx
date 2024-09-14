/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdFormatListBulletedAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   // console.log(event);
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   // console.log(event);
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClick = (event) => {
    console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} is due on: ${dueDate}`);
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className={`"container text-center" ${styles.AddTodo}`}>
      <form className="row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            // className={`"btn btn-success" ${styles.button}`}
            // // onClick={() => onNewItem("a", "b")}
            // onClick={handleAddButtonClick}

            className={`"btn btn-success" ${styles.button}`}
          >
            {/* Add */}
            {/* MdFormatListBulletedAdd */}
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div>

    // <div className={`"container text-center" ${styles.AddTodo}`}>
    //   <div className="row">
    //     <div className="col-6">
    //       <input
    //         type="text"
    //         placeholder="Enter Todo Here"
    //         value={todoName}
    //         onChange={handleNameChange}
    //       />
    //     </div>
    //     <div className="col-4">
    //       <input type="date" value={dueDate} onChange={handleDateChange} />
    //     </div>
    //     <div className="col-2">
    //       <button
    //         type="button"
    //         className={`"btn btn-success" ${styles.button}`}
    //         // onClick={() => onNewItem("a", "b")}
    //         onClick={handleAddButtonClick}
    //       >
    //         {/* Add */}
    //         {/* MdFormatListBulletedAdd */}
    //         <MdFormatListBulletedAdd />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AddTodo;
