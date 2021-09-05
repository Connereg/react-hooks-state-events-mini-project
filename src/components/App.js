import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  //TOP LEVEL SETTER FUNCTIONS
  const [ tasks, setTasks ] = useState(TASKS)
  const [category, setCategory] = useState("All")
  const [categoryList, setCategoryList] = useState([...CATEGORIES])

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(deletedTaskText) {
    // This function alters 'tasks' state by filtering out list of tasks
    // that have text content NOT EQUAL to the text of the targeted task ('deletedTaskText')
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  } 

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter 
      categoryData={CATEGORIES} 
      selectedCategory={category} 
      onSelectCategory={setCategory} />

      <NewTaskForm 
       categoryList={categoryList.filter((eachCat) => eachCat !== "All")}
       onTaskFormSubmit={handleAddTask} />

      <TaskList taskData={visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
