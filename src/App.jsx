// function App() {
//   return (
//     <center className="todo-container">
//       <h1>Todo App </h1>

//       <div className="row">
//         <div className="col-6">
//           <input type="text" placeholder="Enter Todo Here"  />
//         </div>
//         <div className="col-4">
//           <input type="date" />
//         </div>
//         <div className="col-2">
//         <button type="button" className="btn btn-success">
//           Add
//         </button>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-6">
//           Buy Milk
//         </div>
//         <div className="col-4">
//           4/10/2023
//         </div>
//         <div className="col-2">
//         <button type="button" className="btn btn-danger">
//           Delete
//         </button>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-6">
//           Go to Collage
//         </div>
//         <div className="col-4">
//           4/10/2023
//         </div>
//         <div className="col-2">
//           <button type="button" className="btn btn-danger">
//             Delete
//           </button>
//         </div>
//       </div>
//     </center>
//   );
// }

// export default App;

// The page could be build uding two ways :- First writing everything in this page only and Secondly making components of it which could be used to ease the work as we would not have to write the common things again and again and could use the components directly

// The Above part is Done using the first way in which everything is done on this page only
// Now in the below part we would make components.

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to Collage",
      dueDate: "6/10/2023",
    },
    {
      name: "Start Programming",
      dueDate: "6/10/2023",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  };

  return (
    <center>
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
      {/* <TodoItem1></TodoItem1> */}
      {/* <TodoItem2></TodoItem2> */}
      {/* <TodoItem todoDate={"4/10/2023"} todoName={"Buy Milk"}></TodoItem>
      <TodoItem todoDate={"6/10/2024"} todoName={"Go to Collage"}></TodoItem> */}
    </center>
  );
}

export default App;
