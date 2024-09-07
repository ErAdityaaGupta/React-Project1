/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}

      {/* <TodoItem todoDate={"4/10/2023"} todoName={"Buy Milk"}></TodoItem>
      <TodoItem todoDate={"6/10/2024"} todoName={"Go to Collage"}></TodoItem> */}
    </>
  );
}

export default TodoItems;
